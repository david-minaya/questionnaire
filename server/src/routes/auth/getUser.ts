import { Router } from 'express';

export const getUser = Router();

getUser.get('/user', async (req, res) => {
  res.send({
    ...req.session.user,
    password: undefined
  });
});
