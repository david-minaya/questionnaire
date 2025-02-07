import { BaseEntity, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';
import { Answer } from './answer.entity';
import { User } from './user.entity';

@Entity()
export class QuestionnaireAnswer extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Questionnaire, questionnaire => questionnaire.questionnaireAnswers)
  questionnaire!: Questionnaire;

  @OneToMany(() => Answer, answer => answer.questionnaireAnswer, { cascade: true })
  answers?: Answer[];

  @ManyToOne(() => User, user => user.questionnaireAnswers)
  user?: User;
}
