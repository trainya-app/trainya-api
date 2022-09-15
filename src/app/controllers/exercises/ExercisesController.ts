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
    console.log({ name, comment, needsEquipment });

<<<<<<< HEAD
    const someFieldIsEmpty = isSomeEmpty([name, needsEquipment]);
=======
    const someFieldIsEmpty = isSomeEmpty([name, comment]);
>>>>>>> f59e42f (refactor: refactor some returns in response)
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

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const exercise = await ExercisesRepository.findById(parsedId);
    if (!exercise) {
      return res.status(400).json({
        message: 'Exercício não encontrado',
        exercise: null,
      });
    }

    await ExercisesRepository.delete(parsedId);
    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const exerciseExists = await ExercisesRepository.findById(parsedId);
    if (!exerciseExists) {
      return res.status(400).json({
        message: 'Exercício não encontrado',
        exercise: null,
      });
    }

    return res.status(200).send({ exercise: exerciseExists });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const { name, comment, needsEquipment } = req.body;

    const someFieldIsEmpty = isSomeEmpty([name, comment, needsEquipment]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        exercise: null,
      });
    }

    const exerciseExists = await ExercisesRepository.findById(parsedId);
    if (!exerciseExists) {
      return res.status(400).json({
        message: 'Exercício não encontrado',
        exercise: null,
      });
    }

    const nameExists = await ExercisesRepository.findByName(name);
    if (nameExists) {
      let id = nameExists.id;
      if (id !== parsedId) {
        return res.status(400).json({
          message: 'Exercício já cadastrado',
          exercise: null,
        });
      }

      const updatedExercise = await ExercisesRepository.update({
        id: parsedId,
        name,
        comment,
        needs_equipment: needsEquipment,
      });

      return res
        .status(200)
        .json({ message: 'Exercício atualizado!', exercise: updatedExercise });
    }
  }
}

export default new ExercisesController();
