import express from 'express';
import cors from 'cors';
import { AppDataSource } from './datasource';
import { session } from './middlewares/session';
import { userRoutes } from './routes/user';
import { authRoutes } from './routes/auth';
import { adminRoutes } from './routes/admin';

const app = express();

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(session());
app.use('/auth', authRoutes);
app.use('/admins', adminRoutes);
app.use('/users', userRoutes);

(async () => {

  await AppDataSource.initialize();

  app.listen(parseInt(process.env.PORT!), process.env.HOST!, () => {
    console.log(`http://${process.env.HOST}:${process.env.PORT}`);
  });
})();
