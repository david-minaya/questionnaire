import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionnaireQuestion } from './questionnaireQuestion.entity';
import { QuestionnaireAnswer } from './questionnaireAnswer.entity';

@Entity()
export class Questionnaire extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @OneToMany(() => QuestionnaireQuestion, questionnaireQuestion => questionnaireQuestion.questionnaire)
  questionnaireQuestions?: QuestionnaireQuestion[];

  @OneToMany(() => QuestionnaireAnswer, questionnaireAnswer => questionnaireAnswer.questionnaire)
  questionnaireAnswers?: QuestionnaireAnswer[];
}
