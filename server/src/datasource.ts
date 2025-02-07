import { DataSource } from 'typeorm';
import { Questionnaire } from './entities/questionnaire.entity';
import { User } from './entities/user.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';
import { QuestionnaireQuestion } from './entities/questionnaireQuestion.entity';
import { QuestionnaireAnswer } from './entities/questionnaireAnswer.entity';
import { Answer } from './entities/answer.entity';
import { AnswerOption } from './entities/answerOption.entity';
import { Seed1738803220506 } from './migrations/1738803220506-seed';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '0'),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [
    User, 
    Questionnaire, 
    Question, 
    QuestionnaireQuestion,
    Option,
    QuestionnaireAnswer,
    Answer,
    AnswerOption
  ],
  migrations: [
    Seed1738803220506
  ],
  extra: {
    host: process.env.DB_SOCKET_PATH
  }
});
