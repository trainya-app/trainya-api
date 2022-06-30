import { Request, Response } from 'express';

class RollsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new RollsRepository();
