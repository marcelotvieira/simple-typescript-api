import { Router } from 'express';
import rescue from 'express-rescue';
import { userRegister, userLogin } from '../controller/user.controller';
import { generateJwt } from '../middleware';

const userRouter = Router();

userRouter.post(
  '/users',
  rescue(userRegister),
  rescue(generateJwt),
);

userRouter.post(
  '/login',
  rescue(userLogin),
  rescue(generateJwt),
);

export default userRouter;