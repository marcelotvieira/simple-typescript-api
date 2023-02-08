import { NextFunction, Request, Response } from 'express';
import { register, login } from '../service/user.service';

const userRegister = async (req: Request, res: Response, next: NextFunction) => {
  await register(req.body);
  next();
};

const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  const data = await login(req.body);
  req.body = data;
  next();
};

export {
  userRegister,
  userLogin,
};