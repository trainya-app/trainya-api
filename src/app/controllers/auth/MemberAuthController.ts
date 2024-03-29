import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import MembersRepository from '../../repositories/members/MembersRepository';
import { SECRET } from '../../contants/secret.token';

class MemberAuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;
    const someFieldIsEmpty = isSomeEmpty([email, password]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram inseridos',
        member: null,
        token: null,
      });
    }

    const memberExists = await MembersRepository.findByEmail({ email });
    if (!memberExists) {
      return res
        .status(400)
        .json({ message: 'Email não existe', member: null, token: null });
    }

    const checkPassword = await bcrypt.compare(password, memberExists.password);

    if (!checkPassword) {
      return res
        .status(400)
        .json({ message: 'Senha incorreta', member: null, token: null });
    }

    const token = jwt.sign(
      {
        id: memberExists.id,
      },
      SECRET,
      {
        expiresIn: process.env.EXPIRES_IN || '30d',
      }
    );

    return res.status(200).send({ message: 'Logado', token });
  }
}

export default new MemberAuthController();
