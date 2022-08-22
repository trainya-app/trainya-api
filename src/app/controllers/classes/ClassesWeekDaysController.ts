import { Request, Response } from 'express';
import ClassesWeekDaysRepository from '../../repositories/classes/ClassesWeekDaysRepository';

class ClassesWeekDaysController {
  async index(req: Request, res: Response) {
    const classesWeekDays = await ClassesWeekDaysRepository.findAll();
    return res.send({ classesWeekDays });
  }
}

export default new ClassesWeekDaysController();
