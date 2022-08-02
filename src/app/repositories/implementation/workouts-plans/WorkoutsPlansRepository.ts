import { Request, Response } from 'express';

class WorkoutsPlansRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new WorkoutsPlansRepository();
