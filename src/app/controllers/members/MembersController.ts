import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import bcrypt from 'bcrypt';
import MembersRepository from '../../repositories/members/MembersRepository';

class MembersController {
  async index(req: Request, res: Response) {
    const members = await MembersRepository.findAll();

    return res.json({ members });
  }

  async store(req: Request, res: Response) {
    const {
      phone,
      name,
      weight,
      height,
      email,
      password,
      state,
      city,
      street,
      adressNumber,
    } = req.body;

    const someFieldIsEmpty = isSomeEmpty([
      phone,
      name,
      weight,
      height,
      email,
      password,
      state,
      city,
      street,
      adressNumber,
    ]);

    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram inseridos',
        member: null,
      });
    }

    const emailExists = await MembersRepository.findByEmail({ email });
    if (emailExists) {
      return res
        .status(400)
        .json({ message: 'Email já está em uso', member: null });
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const member = await MembersRepository.create({
      phone,
      name,
      weight,
      height,
      email,
      password: hashedPassword,
      state,
      city,
      street,
      adress_number: adressNumber,
    });

    if (member == null) {
      return res.status(400).json({
        message: 'Não foi possivel criar o membro',
        member: null,
      });
    }

    return res.status(200).json({ message: 'Membro criado', member });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const memberExists = await MembersRepository.findById(parsedId);
    if (!memberExists) {
      return res
        .status(404)
        .json({ message: 'Membro não encontrado', member: null });
    }

    await MembersRepository.delete(parsedId);

    return res.sendStatus(200);
  }
}

export default new MembersController();
