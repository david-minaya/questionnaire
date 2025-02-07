import { NextFunction, Request, Response } from 'express';

export function isAuth(role: 'admin' | 'user') {

  return (req: Request, res: Response, next: NextFunction) => {
  
    if (!req.session.user || req.session.user.role != role) {
      res
        .status(409)
        .send({ error: 'Unauthorized' });
      return;
    }

    next();
  };
}
