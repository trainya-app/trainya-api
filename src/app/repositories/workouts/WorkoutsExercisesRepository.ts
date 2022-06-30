import { Request, Response } from 'express';

class WorkoutsExercisesRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new WorkoutsExercisesRepository();
