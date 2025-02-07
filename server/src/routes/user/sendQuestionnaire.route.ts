import { Router } from 'express';
import { Questionnaire } from '../../entities/questionnaire.entity';
import { QuestionnaireAnswer } from '../../entities/questionnaireAnswer.entity';

interface QuestionnaireBody {
  questionnaireId: number;
  answers: {
    answerId: number,
    questionId: number,
    value?: string,
    options?: { id: number }[]
  }[]
}

export const sendQuestionnaire = Router();

sendQuestionnaire.post('/questionnaires', async (req, res) => {

  const user = req.session.user!;
  const body: QuestionnaireBody = req.body;

  const questionnaire = await Questionnaire.findOneBy({ id: body.questionnaireId });

  if (!questionnaire) {
    res
      .status(404)
      .send({ error: 'Not found' });
    return;
  }

  const result = await QuestionnaireAnswer.save(({
    user: { id: user.id },
    questionnaire: { id: questionnaire.id },
    answers: body.answers.map(answer => ({
      question: { id: answer.questionId },
      value: answer.value,
      answerOptions: answer.options?.map(option => ({
        option: { 
          id: option.id 
        }
      }))
    }))
  }));

  res.json(result);
});
