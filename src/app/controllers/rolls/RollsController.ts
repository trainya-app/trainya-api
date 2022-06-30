import { Request, Response } from 'express';

class RollsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new RollsController();
