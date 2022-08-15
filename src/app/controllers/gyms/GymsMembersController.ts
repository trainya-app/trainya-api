import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import GymsMembersRepository from '../../repositories/gyms/GymsMembersRepository';
import GymsRepository from '../../repositories/gyms/GymsRepository';
import MembersRepository from '../../repositories/members/MembersRepository';

class GymsMembersController {
  async index(req: Request, res: Response) {
    const gymMembers = await GymsMembersRepository.findAll();

    return res.json(gymMembers);
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

    return res
      .status(200)
      .json({ message: 'Membro da academia encontrado', gymMemberExists });
  }
}

export default new GymsMembersController();
