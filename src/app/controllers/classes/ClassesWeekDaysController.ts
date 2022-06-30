import { Request, Response } from 'express';

class ClassesWeekDaysController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ClassesWeekDaysController();
