import { Request, Response } from 'express';

class GymsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new GymsController();
