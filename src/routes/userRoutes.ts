import { Router } from 'express';
import { registerUser } from '../controllers/userController';

const userRouter = Router();

userRouter.post('/users', registerUser);

export default userRouter;
