import { Request, Response } from 'express';

class WorkoutsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new WorkoutsRepository();
