import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import ExercisesRepository from '../../repositories/exercises/ExercisesRepository';

class ExercisesController {
  async index(req: Request, res: Response) {
    const exercises = await ExercisesRepository.findAll();
    return res.send({ exercises });
  }

  async store(req: Request, res: Response) {
    const { name, comment, needsEquipment } = req.body;

    const someFieldIsEmpty = isSomeEmpty([name, comment, needsEquipment]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        exercise: null,
      });
    }

    const nameExists = await ExercisesRepository.findByName(name);
    if (nameExists) {
      return res.status(400).json({
        message: 'Exercício já cadastrado',
        exercise: null,
      });
    }

    const exercise = await ExercisesRepository.store({
      name,
      comment,
      needs_equipment: needsEquipment,
    });
    return res.status(200).json({ message: 'Exercício cadastrado!', exercise });
  }
}

export default new ExercisesController();
