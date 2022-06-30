import { Request, Response } from 'express';

class WorkoutsPlansController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new WorkoutsPlansController();
