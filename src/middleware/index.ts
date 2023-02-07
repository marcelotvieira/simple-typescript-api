import { sign } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import dotenv from 'dotenv';

dotenv.config();

const { JWT_SECRET } = process.env;

const generateJwt = (req: Request, res: Response, _next: NextFunction) => {
  const data = req.body;
  delete data.password;
  res.status(201).json({ token: sign(data, JWT_SECRET as string) });
};

export default generateJwt;
