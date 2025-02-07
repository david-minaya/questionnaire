import { QuestionnaireAnswers } from './questionnaireAnswer';

export interface User {
  id: number;
  role: 'user' | 'admin',
  name: string;
  username: string;
  questionnaireAnswers?: QuestionnaireAnswers[];
}
