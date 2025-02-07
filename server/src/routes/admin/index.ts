import { Router } from 'express';
import { isAuth } from '../../middlewares/isAuth';
import { getUsers } from './getUsers.route';

export const adminRoutes = Router()
  .use(isAuth('admin'))
  .use(getUsers);
