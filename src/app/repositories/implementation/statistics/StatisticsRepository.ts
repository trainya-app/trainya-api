import { Request, Response } from 'express';

class StatisticsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new StatisticsRepository();
