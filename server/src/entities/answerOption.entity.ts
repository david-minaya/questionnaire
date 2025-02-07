import { BaseEntity, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Answer } from './answer.entity';
import { Option } from './option.entity';

@Entity()
export class AnswerOption extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Option, option => option.answerOptions)
  option?: Option;

  @ManyToOne(() => Answer, answer => answer.answerOptions)
  answer?: Answer;
}
