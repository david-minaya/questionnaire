import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Option } from './option.entity';
import { QuestionnaireQuestion } from './questionnaireQuestion.entity';
import { Answer } from './answer.entity';

@Entity()
export class Question extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: 'enum', enum: ['input', 'mcq']})
  type!: 'input' | 'mcq';

  @OneToMany(() => Answer, answer => answer.question)
  answers?: Answer[];

  @OneToMany(() => Option, option => option.question)
  options?: Option[];

  @OneToMany(() => QuestionnaireQuestion, questionnaireQuestion => questionnaireQuestion.question)
  questionnaireQuestion?: QuestionnaireQuestion;
}
