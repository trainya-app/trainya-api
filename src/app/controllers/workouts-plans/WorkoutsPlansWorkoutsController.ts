import { Request, Response } from 'express';

class WorkoutsPlansWorkoutsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new WorkoutsPlansWorkoutsController();
