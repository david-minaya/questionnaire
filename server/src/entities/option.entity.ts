import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';
import { AnswerOption } from './answerOption.entity';

@Entity()
export class Option extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @OneToMany(() => AnswerOption, answerOption => answerOption.option)
  answerOptions!: AnswerOption[];

  @ManyToOne(() => Question, question => question.options)
  question?: Question;
}
