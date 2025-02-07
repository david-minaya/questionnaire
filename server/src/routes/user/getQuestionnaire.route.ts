import { Router } from 'express';
import { Questionnaire } from '../../entities/questionnaire.entity';
import { Answer } from '../../entities/answer.entity';

export const getQuestionnaire = Router();

getQuestionnaire.get('/questionnaires/:id', async (req, res) => {

  const user = req.session.user!;
  const id = parseInt(req.params.id);

  const answers = await Answer.findBy({
    questionnaireAnswer: {
      user: {
        id: user.id
      }
    }
  });

  const questionnaire = await Questionnaire.createQueryBuilder('questionnaire')
    .leftJoinAndSelect('questionnaire.questionnaireQuestions', 'questionnaireQuestion')
    .leftJoinAndSelect('questionnaireQuestion.question', 'question')
    .leftJoinAndSelect('question.options', 'questionOption')
    .leftJoinAndSelect(
      'questionnaire.questionnaireAnswers', 
      'questionnaireAnswer',
      'questionnaireAnswer.questionnaireId = questionnaire.id and questionnaireAnswer.userId = :userId',
      { userId: user.id }
    )
    .leftJoinAndSelect(
      'question.answers', 
      'answer', 
      'answer.questionId = question.id AND answer.id IN (:...ids)',
      { ids: [...answers.map(ans => ans.id), -1] }
    )
    .leftJoinAndSelect('answer.answerOptions', 'answerOption')
    .leftJoinAndSelect('answerOption.option', 'option')
    .where('questionnaire.id = :id', { id })
    .orderBy('questionnaire.id', 'ASC')
    .addOrderBy('questionnaireQuestion.priority', 'ASC')
    .addOrderBy('questionOption.id', 'ASC')
    .getOne();

  res.json(questionnaire);
});
