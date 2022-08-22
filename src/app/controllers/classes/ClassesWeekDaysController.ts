import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import ClassesRepository from '../../repositories/classes/ClassesRepository';
import ClassesWeekDaysRepository from '../../repositories/classes/ClassesWeekDaysRepository';
import WeekDaysRepository from '../../repositories/week-days/WeekDaysRepository';

class ClassesWeekDaysController {
  async index(req: Request, res: Response) {
    const classesWeekDays = await ClassesWeekDaysRepository.findAll();
    return res.send({ classesWeekDays });
  }

  async store(req: Request, res: Response) {
    const { weekDayId, classId } = req.body;
    const someFieldIsEmpty = isSomeEmpty([weekDayId, classId]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        classWeekDay: null,
      });
    }

    const weekDayExists = await WeekDaysRepository.findById(weekDayId);
    if (!weekDayExists) {
      return res
        .status(400)
        .json({ message: 'Dia da semana não encontrado', classWeekDay: null });
    }

    const classExists = await ClassesRepository.findById(classId);
    if (!classExists) {
      return res
        .status(400)
        .json({ message: 'Aula não encontrada', classWeekDay: null });
    }

    const createdClassWeekDay = await ClassesWeekDaysRepository.create({
      class_id: classId,
      week_day_id: weekDayId,
    });
    return res
      .status(200)
      .json({ message: 'Aula do dia da semana criado', createdClassWeekDay });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const classWeekDayExists = await ClassesWeekDaysRepository.findById(
      parsedId
    );
    if (!classWeekDayExists) {
      return res.status(400).json({
        message: 'Aula do dia da semana não encontrado',
        classWeekDay: null,
      });
    }

    await ClassesWeekDaysRepository.delete(parsedId);
    return res.sendStatus(200);
  }
}

export default new ClassesWeekDaysController();
