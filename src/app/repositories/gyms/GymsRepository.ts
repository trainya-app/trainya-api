import { Request, Response } from 'express';

class GymsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new GymsRepository();