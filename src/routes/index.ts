import { Router } from 'express';
import sessionsRouter from './Sessions.routes';
import userRouter from './Users.routes';
import testeRouter from './teste.routes';

const routes = Router();
routes.use('/test', testeRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/users', userRouter);

export default routes;
