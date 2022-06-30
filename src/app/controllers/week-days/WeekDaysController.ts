import { Request, Response } from 'express';

class WeekDaysController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new WeekDaysController();
