import { Request, Response } from 'express';
import ExercisesRepository from '../../repositories/exercises/ExercisesRepository';

class ExercisesController {
  async index(req: Request, res: Response) {
    const exercises = await ExercisesRepository.findAll();
    return res.send({ exercises });
  }
}

export default new ExercisesController();
