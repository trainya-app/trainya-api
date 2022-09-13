import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import GymsRepository from '../../repositories/gyms/GymsRepository';

class GymAuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;
    const someFieldIsEmpty = isSomeEmpty([email, password]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram inseridos',
        member: null,
      });
    }

    const gymExists = await GymsRepository.findByEmail({ email });
    if (!gymExists) {
      return res.status(400).json({ message: 'Email não existe', gym: null });
    }

    const checkPassword = await bcrypt.compare(password, gymExists.password);

    if (!checkPassword) {
      return res.status(400).json({ message: 'Senha incorreta', gym: null });
    }

    const secret = process.env.SECRET || 'secret';
    const token = jwt.sign(
      {
        id: gymExists.id,
      },
      secret,
      {
        expiresIn: process.env.EXPIRES_IN || '30d',
      }
    );

    return res.status(200).send({ message: 'Logado', token });
  }
}

export default new GymAuthController();
