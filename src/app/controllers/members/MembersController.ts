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

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const memberExists = await MembersRepository.findById(parsedId);
    if (!memberExists) {
      return res
        .status(404)
        .json({ message: 'Membro não encontrado', member: null });
    }

    return res
      .status(200)
      .json({ message: 'Membro encontrado', member: memberExists });
  }

  async updatePassword(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const { firstNewPassword, secondNewPassword } = req.body;

    if (firstNewPassword !== secondNewPassword) {
      return res
        .status(400)
        .json({ message: 'As senhas não são iguais', newPassword: null });
    }

    const memberExists = await MembersRepository.findById(parsedId);
    if (!memberExists) {
      return res
        .status(404)
        .json({ message: 'Membro não encontrado', member: null });
    }

    const { password } = await MembersRepository.findPasswordById(parsedId);
    const samePassword = await bcrypt.compare(firstNewPassword, password);

    if (samePassword) {
      return res.status(400).json({
        message: 'A senha nova não pode ser igual a antiga',
        newPassword: null,
      });
    }

    const hashedNewPassword = await bcrypt.hash(firstNewPassword, 8);
    const newPassword = await MembersRepository.updatePassword(
      parsedId,
      hashedNewPassword
    );

    return res.json({ message: 'Atualizada', newPassword });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
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

    const memberExists = await MembersRepository.findById(parsedId);
    if (!memberExists) {
      return res
        .status(404)
        .json({ message: 'Membro não encontrado', member: null });
    }

    const emailExists = await MembersRepository.findByEmail(email);
    if (emailExists) {
      const idByEmail = await MembersRepository.findIdByEmail(email);
      let id = idByEmail.id;
      if (id != parsedId) {
        return res
          .status(400)
          .json({ message: 'Email já está em uso', member: null });
      }
    }

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'ID Inválido', member: null });
    }

    const vWeight = Number.isNaN(Number(weight)) ? undefined : Number(weight);
    const vHeight = Number.isNaN(Number(height)) ? undefined : Number(height);

    const updatedGym = await MembersRepository.updateMember({
      id: parsedId,
      phone,
      name,
      weight: vWeight,
      height: vHeight,
      email,
      password,
      state,
      city,
      street,
      adress_number: adressNumber,
    });

    return res.json({ message: 'Dados atualizados!', updatedGym });
  }
}

export default new MembersController();
