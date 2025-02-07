import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionnaireAnswer } from './questionnaireAnswer.entity';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'enum', enum: ['admin', 'user']})
  role!: 'admin' | 'user';
  
  @Column()
  name!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @OneToMany(() => QuestionnaireAnswer, questionnaireAnswer => questionnaireAnswer.user)
  questionnaireAnswers?: QuestionnaireAnswer[];
}
