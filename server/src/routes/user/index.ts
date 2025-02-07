import { Router } from 'express';
import { isAuth } from '../../middlewares/isAuth';
import { getQuestionnaires } from './getQuestionnaires.route';
import { sendQuestionnaire } from './sendQuestionnaire.route';
import { getQuestionnaire } from './getQuestionnaire.route';

export const userRoutes = Router()
  .use(isAuth('user'))
  .use(getQuestionnaires)
  .use(getQuestionnaire)
  .use(sendQuestionnaire);
