import { Response, Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface TokenPayload {
  iat: number;
  exp: number;
  user_id: string;
}
export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AppError('JWT is missing', 401);
  }
  const [, token] = authHeader.split(' ');

  const { jwt } = authConfig;

  const decoded = verify(token, jwt.secretToken);

  const { user_id } = decoded as TokenPayload;

  req.user = {
    id: user_id,
  };

  return next();
}
