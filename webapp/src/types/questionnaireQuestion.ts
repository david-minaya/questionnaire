import { Question } from './question';
import { Questionnaire } from './questionnaire';

export interface QuestionnaireQuestion {
  id: number;
  priority: number;
  questionnaire: Questionnaire;
  question: Question;
}
