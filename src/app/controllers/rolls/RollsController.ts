import { Request, Response } from 'express';
import RollsRepository from '../../repositories/rolls/RollsRepository';

class RollsController {
  async index(req: Request, res: Response) {
    const rolls = await RollsRepository.findAll();

    res.send(rolls);
  }
}

export default new RollsController();
