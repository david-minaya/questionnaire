import { Answer } from './answer';
import { Questionnaire } from './questionnaire';

export interface QuestionnaireAnswers {
  id: number;
  questionnaire: Questionnaire;
  answers?: Answer[];
}
