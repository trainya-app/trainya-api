import { Request, Response } from 'express';

class WeekDaysRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new WeekDaysRepository();
