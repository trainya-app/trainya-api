import { Request, Response } from 'express';

class GymsStocksRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new GymsStocksRepository();
