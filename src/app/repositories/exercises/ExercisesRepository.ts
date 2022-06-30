import { Request, Response } from 'express';

class ExercisesRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ExercisesRepository();
