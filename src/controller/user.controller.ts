import { NextFunction, Request, Response } from 'express';
import register from '../service/user.service';

const userRegister = async (req: Request, res: Response, next: NextFunction) => {
  await register(req.body);
  next();
};

export default userRegister;