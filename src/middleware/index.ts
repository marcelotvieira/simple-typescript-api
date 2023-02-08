import { sign } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import dotenv from 'dotenv';
import ApiError from '../error/ApiError';

dotenv.config();

const generateJwt = (req: Request, res: Response, _next: NextFunction) => {
  const data = req.body;
  delete data.password;
  const response = { token: sign(data, 'secret') };
  res.status(req.body.id ? 200 : 201).json(response);
};

const errorHandler = async (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if ('statusCode' in error) {
    const newError = error as ApiError;
    return res.status(newError.statusCode).json({ message: newError.message });
  }
  res.status(500).json({ message: error.message });
};

export {
  generateJwt,
  errorHandler,
};
