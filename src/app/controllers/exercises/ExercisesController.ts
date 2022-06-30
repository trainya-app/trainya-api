import { Request, Response } from 'express';

class ExercisesController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ExercisesController();
