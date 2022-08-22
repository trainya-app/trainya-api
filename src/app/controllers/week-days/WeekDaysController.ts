import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import WeekDaysRepository from '../../repositories/week-days/WeekDaysRepository';

class WeekDaysController {
  async index(req: Request, res: Response) {
    const weekDays = await WeekDaysRepository.findAll();
    return res.send({ weekDays });
  }

  async store(req: Request, res: Response) {
    const { name } = req.body;
    const someFieldIsEmpty = isSomeEmpty([name]);
    if (someFieldIsEmpty) {
      return res.status(400).send({
        message: 'Campos obrigatórios não foram enviados',
        weekDay: null,
      });
    }

    const weekDayExists = await WeekDaysRepository.findByName(name);
    if (weekDayExists) {
      return res.status(400).send({
        message: 'Dia da semana já existe',
        weekDay: null,
      });
    }

    const weekDay = await WeekDaysRepository.create({ name });
    return res.status(200).json({ message: 'Dia da semana criado', weekDay });
  }
}

export default new WeekDaysController();
