import { Request, Response } from 'express';

class WorkoutsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new WorkoutsController();
