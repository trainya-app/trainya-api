import { Request, Response } from 'express';
import WorkoutsPlansRepository from '../../repositories/workouts-plans/WorkoutsPlansRepository';

class WorkoutsPlansController {
  async index(req: Request, res: Response) {
    const workoutPlans = await WorkoutsPlansRepository.findAll();
    res.send({ workoutPlans });
  }
}

export default new WorkoutsPlansController();
