import jwt from 'jsonwebtoken';

export const createToken = (data: any): string => {
  const secret = process.env.SECRET || 'secret';

  const token = jwt.sign(data, secret, {
    expiresIn: process.env.EXPIRES_IN || '30d',
  });

  return token;
};
