import { Router, Request, Response } from 'express';
import CreateUserService from '../service/CreateUserService';

const userRouter = Router();

userRouter.post('/', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({ email, name, password });

  delete user.password;

  return res.json(user);
});

export default userRouter;
