import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionnaireAnswer } from './questionnaireAnswer.entity';
import { Question } from './question.entity';
import { AnswerOption } from './answerOption.entity';

@Entity()
export class Answer extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  value!: string;

  @ManyToOne(() => Question, question => question.answers)
  question?: Question;

  @OneToMany(() => AnswerOption, answerOption => answerOption.answer, { cascade: true })
  answerOptions?: AnswerOption[];

  @ManyToOne(() => QuestionnaireAnswer, questionnaireAnswer => questionnaireAnswer.answers)
  questionnaireAnswer?: QuestionnaireAnswer;
}