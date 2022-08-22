import { Request, Response } from 'express';
import WorkoutsExercisesRepository from '../../repositories/workouts/WorkoutsExercisesRepository';

class WorkoutsExercisesController {
  async index(req: Request, res: Response) {
    const workoutsExercises = await WorkoutsExercisesRepository.findAll();
    res.send({ workoutsExercises });
  }
}

export default new WorkoutsExercisesController();
