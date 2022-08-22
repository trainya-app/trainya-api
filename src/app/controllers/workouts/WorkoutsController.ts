import { Request, Response } from 'express';
import WorkoutsRepository from '../../repositories/workouts/WorkoutsRepository';

class WorkoutsController {
  async index(req: Request, res: Response) {
    const workouts = await WorkoutsRepository.findAll();
    res.send({ workouts });
  }
}

export default new WorkoutsController();
