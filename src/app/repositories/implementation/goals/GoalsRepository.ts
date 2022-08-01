import { Request, Response } from 'express';

class GoalsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new GoalsRepository();
