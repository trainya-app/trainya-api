import { Request, Response } from 'express';

class GymController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new GymController();
