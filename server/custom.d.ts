import { User } from './src/entities/user.entity';

declare module 'express-session' {
  interface SessionData {
    user: User;
  }
}
