import { Router } from 'express';
import { User } from '../../entities/user.entity';

export const getUsers = Router();

getUsers.get('/users', async (req, res) => {
  
  const users = await User.find({
    relations: {
      questionnaireAnswers: {
        questionnaire: true,
        answers: {
          question: {
            options: true
          },
          answerOptions: {
            option: true
          }
        },
      }
    },
    where: {
      role: 'user'
    }
  });

  const result = users.map(user => ({
    ...user,
    password: undefined
  }));

  res.send(result);
});
