import bcrypt from 'bcrypt';
import { Router } from 'express';
import { User } from '../../entities/user.entity';

export const login = Router();

login.post('/login', async (req, res) => {
  
  if (!req.body?.username || !req.body?.password) {
    res
      .status(400)
      .send({ error: 'Bad Request' });
    return;
  }

  const user = await User.findOneBy({
    username: req.body.username
  });

  if (!user) {
    res
      .status(404)
      .send({ error: 'User not found' });
    return;
  }

  if (!await bcrypt.compare(req.body.password, user.password)) {
    res
      .status(404)
      .send({ error: 'Invalid password' });
    return;
  }

  req.session.user = user;

  res.send({ 
    ...user, 
    password: undefined 
  });
});
