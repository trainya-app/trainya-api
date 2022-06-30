import { Request, Response } from 'express';

class GoalsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new GoalsController();
