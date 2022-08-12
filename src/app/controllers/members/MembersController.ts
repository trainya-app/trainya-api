import { Request, Response } from 'express';
import MembersRepository from '../../repositories/members/MembersRepository';

class MembersController {
  async index(req: Request, res: Response) {
    const members = await MembersRepository.findAll();

    return res.json({ members });
  }
}

export default new MembersController();
