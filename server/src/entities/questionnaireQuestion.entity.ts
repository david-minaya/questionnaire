import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';
import { Question } from './question.entity';

@Entity()
export class QuestionnaireQuestion extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  priority!: number;

  @ManyToOne(() => Questionnaire, questionnaire => questionnaire.questionnaireQuestions)
  questionnaire?: Questionnaire;

  @ManyToOne(() => Question, question => question.questionnaireQuestion)
  question?: Question;
}
