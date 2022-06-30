import { Request, Response } from 'express';

class WorkoutsPlansWorkoutsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new WorkoutsPlansWorkoutsRepository();
