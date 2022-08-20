import { Request, Response } from 'express';
import MembersGoalsRepository from '../../repositories/members/MembersGoalsRepository';

class MembersGoalsController {
  async index(req: Request, res: Response) {
    const memberGoals = await MembersGoalsRepository.findAll();
    return res.send({ memberGoals });
  }
}

export default new MembersGoalsController();
