import { Question } from './question';
import { AnswerOption } from './answerOption';
import { QuestionnaireAnswers } from './questionnaireAnswer';

export interface Answer {
  id: number;
  value?: string;
  question: Question;
  answerOptions?: AnswerOption[];
  questionnaireAnswer: QuestionnaireAnswers;
}
