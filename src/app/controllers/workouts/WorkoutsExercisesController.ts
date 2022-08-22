import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import ExercisesRepository from '../../repositories/exercises/ExercisesRepository';
import WorkoutsExercisesRepository from '../../repositories/workouts/WorkoutsExercisesRepository';
import WorkoutsRepository from '../../repositories/workouts/WorkoutsRepository';

class WorkoutsExercisesController {
  async index(req: Request, res: Response) {
    const workoutsExercises = await WorkoutsExercisesRepository.findAll();
    res.send({ workoutsExercises });
  }

  async store(req: Request, res: Response) {
    const { workoutId, exerciseId, sets, repetitions, duration } = req.body;
    const someFieldIsEmpty = isSomeEmpty([
      workoutId,
      exerciseId,
      sets,
      repetitions,
      duration,
    ]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram preenchidos',
        workoutExercise: null,
      });
    }

    const workoutExists = await WorkoutsRepository.findById(workoutId);
    if (!workoutExists) {
      return res.status(400).json({
        message: 'Treino não encontrado',
        workoutExercise: null,
      });
    }

    const exerciseExists = await ExercisesRepository.findById(exerciseId);
    if (!exerciseExists) {
      return res.status(400).json({
        message: 'Exercício não encontrado',
        workoutExercise: null,
      });
    }

    const workoutExercise = await WorkoutsExercisesRepository.create({
      workout_id: workoutId,
      exercise_id: exerciseId,
      sets,
      repetitions,
      duration,
    });

    return res
      .status(200)
      .json({ message: 'Exercicio do treino criado', workoutExercise });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const workoutExercise = await WorkoutsExercisesRepository.findById(
      parsedId
    );
    if (!workoutExercise) {
      return res.status(400).json({
        message: 'Exercicio do treino não encontrado',
        workoutExercise: null,
      });
    }

    await WorkoutsExercisesRepository.delete(parsedId);

    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const workoutExercise = await WorkoutsExercisesRepository.findById(
      parsedId
    );
    if (!workoutExercise) {
      return res.status(400).json({
        message: 'Exercicio do treino não encontrado',
        workoutExercise: null,
      });
    }

    return res.status(200).json({ workoutExercise });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const { workoutId, exerciseId, sets, repetitions, duration } = req.body;
    const someFieldIsEmpty = isSomeEmpty([
      workoutId,
      exerciseId,
      sets,
      repetitions,
      duration,
    ]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram preenchidos',
        workoutExercise: null,
      });
    }
    const workoutExerciseExists = await WorkoutsExercisesRepository.findById(
      parsedId
    );
    if (!workoutExerciseExists) {
      return res.status(400).json({
        message: 'Exercicio do treino não encontrado',
        workoutExercise: null,
      });
    }

    const workoutExists = await WorkoutsRepository.findById(workoutId);
    if (!workoutExists) {
      return res.status(400).json({
        message: 'Treino não encontrado',
        workoutExercise: null,
      });
    }

    const exerciseExists = await ExercisesRepository.findById(exerciseId);
    if (!exerciseExists) {
      return res.status(400).json({
        message: 'Exercício não encontrado',
        workoutExercise: null,
      });
    }

    const workout_id = Number.isNaN(Number(workoutId))
      ? undefined
      : Number(workoutId);

    const exercise_id = Number.isNaN(Number(exerciseId))
      ? undefined
      : Number(exerciseId);

    const vSets = Number.isNaN(Number(sets)) ? undefined : Number(sets);

    const vRepitions = Number.isNaN(Number(repetitions))
      ? undefined
      : Number(repetitions);

    const vDuration = Number.isNaN(Number(duration))
      ? undefined
      : Number(duration);

    const updatedWorkoutExercise = await WorkoutsExercisesRepository.update({
      id: parsedId,
      workout_id,
      exercise_id,
      sets: vSets,
      repetitions: vRepitions,
      duration: vDuration,
    });

    return res.status(200).json({
      message: 'Exercicio do treino atualizado',
      workoutExercise: updatedWorkoutExercise,
    });
  }
}

export default new WorkoutsExercisesController();
