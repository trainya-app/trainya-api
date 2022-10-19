import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET } from '../contants/secret.token';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: 'O token de autenticação não foi encontrado',
      error: true,
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, SECRET);
    const { id } = data as TokenPayload;

    req.userId = Number(id);

    return next();
  } catch (err) {
    console.log({ err });
    return res.status(401).json({
      message: 'O token está inválido',
      error: true,
    });
  }
}
