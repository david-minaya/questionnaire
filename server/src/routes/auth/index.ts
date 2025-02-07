import { Router } from 'express';
import { login } from './login.route';
import { logout } from './logout.route';
import { getUser } from './getUser';

export const authRoutes = Router()
  .use(login)
  .use(logout)
  .use(getUser);
