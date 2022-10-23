import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import GymsMembersRepository from '../../repositories/gyms/GymsMembersRepository';
import GymsRepository from '../../repositories/gyms/GymsRepository';
import MembersRepository from '../../repositories/members/MembersRepository';

class GymsMembersController {
  async index(req: Request, res: Response) {
    const { gymId } = req.params;
    const { verifyMember, userId } = req.query;

    if (verifyMember === 'true') {
      const memberExistsInGym = await GymsMembersRepository.verifyMember({
        gym_id: Number(gymId),
        user_id: Number(userId),
      });
      return res.json({ exists: !!memberExistsInGym });
    }

    if (!gymId || Number.isNaN(Number(gymId))) {
      return res
        .status(400)
        .json({ message: 'O id da academia precisa ser informado. ' });
    }

    const gymMembers = await GymsMembersRepository.findAll({
      gymId: Number(gymId),
    });

    return res.json({
      message: 'Membros da academia encontrados.',
      gymMembers,
    });
  }

  async store(req: Request, res: Response) {
    const { gymId, memberId } = req.body;

    const someFieldIsEmpty = isSomeEmpty([gymId, memberId]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Insira todos os campos necessários',
        gymMember: null,
      });
    }

    const gymExists = await GymsRepository.findById(gymId);
    if (!gymExists) {
      return res
        .status(404)
        .json({ message: 'Academia não encontrada', gymMember: null });
    }

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res
        .status(404)
        .json({ message: 'Membro não encontrado', gymMember: null });
    }

    const gymMember = await GymsMembersRepository.create({
      gym_id: gymId,
      member_id: memberId,
    });

    return res
      .status(200)
      .json({ message: 'Membro da academia criado', gymMember });
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const gymMemberExists = await GymsMembersRepository.findById(parsedId);
    if (!gymMemberExists) {
      return res.status(404).json({
        message: 'Membro da academia não encontrado',
        gymMember: null,
      });
    }

    return res.status(200).json({
      message: 'Membro da academia encontrado',
      gymMember: gymMemberExists,
    });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const gymMemberExists = await GymsMembersRepository.findById(parsedId);
    if (!gymMemberExists) {
      return res.status(404).json({
        message: 'Membro da academia não encontrado',
        gymMember: null,
      });
    }

    await GymsMembersRepository.delete(parsedId);
    return res.sendStatus(200);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const { gymId, memberId } = req.body;

    const someFieldIsEmpty = isSomeEmpty([gymId, memberId]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Insira todos os campos necessários',
        gymMember: null,
      });
    }

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'ID Inválido', gym: null });
    }

    const gymMemberExists = await GymsMembersRepository.findById(parsedId);
    if (!gymMemberExists) {
      return res.status(404).json({
        message: 'Membro da academia não encontrado',
        gymMember: null,
      });
    }

    const gymExists = await GymsRepository.findById(gymId);
    if (!gymExists) {
      return res
        .status(404)
        .json({ message: 'Academia não encontrada', gymMember: null });
    }

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res
        .status(404)
        .json({ message: 'Membro não encontrado', gymMember: null });
    }

    const gym_id = Number.isNaN(Number(gymId)) ? undefined : Number(gymId);
    const member_id = Number.isNaN(Number(memberId))
      ? undefined
      : Number(memberId);

    const updatedGymMember = await GymsMembersRepository.update(parsedId, {
      gym_id,
      member_id,
    });

    return res
      .status(200)
      .json({ message: 'Membro da academia atualizado', updatedGymMember });
  }
}

export default new GymsMembersController();
