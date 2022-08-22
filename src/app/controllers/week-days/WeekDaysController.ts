import { Request, Response } from 'express';
import WeekDaysRepository from '../../repositories/week-days/WeekDaysRepository';

class WeekDaysController {
  async index(req: Request, res: Response) {
    const weekDays = await WeekDaysRepository.findAll();
    return res.send({ weekDays });
  }
}

export default new WeekDaysController();
