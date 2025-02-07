import { QuestionnaireAnswers } from './questionnaireAnswer';
import { QuestionnaireQuestion } from './questionnaireQuestion';

export interface Questionnaire {
  id: number;
  title: string;
  questionnaireQuestions?: QuestionnaireQuestion[];
  questionnaireAnswers?: QuestionnaireAnswers[];
}
