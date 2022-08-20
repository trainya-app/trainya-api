import { Request, Response } from 'express';
import GoalsRepository from '../../repositories/goals/GoalsRepository';

class GoalsController {
  async index(req: Request, res: Response) {
    const goals = await GoalsRepository.findAll();
    return res.send({ goals });
  }
}

export default new GoalsController();
