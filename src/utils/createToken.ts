import jwt from 'jsonwebtoken';
import { SECRET } from '../app/contants/secret.token';

export const createToken = (data: any): string => {
  const token = jwt.sign(data, SECRET, {
    expiresIn: process.env.EXPIRES_IN || '30d',
  });

  return token;
};
