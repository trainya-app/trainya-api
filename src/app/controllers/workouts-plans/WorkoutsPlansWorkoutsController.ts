import { Request, Response } from 'express';
import WorkoutsPlansWorkoutsRepository from '../../repositories/workouts-plans/WorkoutsPlansWorkoutsRepository';

class WorkoutsPlansWorkoutsController {
  async index(req: Request, res: Response) {
    const workoutPlanWorkouts = await WorkoutsPlansWorkoutsRepository.findAll();
    res.send({ workoutPlanWorkouts });
  }
}

export default new WorkoutsPlansWorkoutsController();
