import { Router } from 'express';

export const logout = Router();

logout.post('/logout', async (req, res) => {
  req.session.destroy(() => {
    res.sendStatus(200);
  });
});
