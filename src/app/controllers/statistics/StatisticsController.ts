import { Request, Response } from 'express';

class StatisticsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new StatisticsController();
