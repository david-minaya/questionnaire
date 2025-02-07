import { Router } from 'express';
import { Questionnaire } from '../../entities/questionnaire.entity';

export const getQuestionnaires = Router();

getQuestionnaires.get('/questionnaires', async (req, res) => {

  const user = req.session.user!;

  const questionnaires = await Questionnaire.createQueryBuilder('questionnaire')
    .leftJoinAndSelect(
      'questionnaire.questionnaireAnswers', 
      'questionnaireAnswers',
      'questionnaireAnswers.questionnaireId = questionnaire.id AND questionnaireAnswers.userId = :userId',
      { userId: user.id }
    )
    .getMany();

  res.json(questionnaires);
});
