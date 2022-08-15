import { Request, Response } from 'express';
import GymsMembersRepository from '../../repositories/gyms/GymsMembersRepository';

class GymsMembersController {
  async index(req: Request, res: Response) {
    const gymMembers = await GymsMembersRepository.findAll();

    return res.json(gymMembers);
  }
}

export default new GymsMembersController();
