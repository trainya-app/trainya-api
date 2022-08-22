import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import WorkoutsPlansRepository from '../../repositories/workouts-plans/WorkoutsPlansRepository';
import WorkoutsPlansWorkoutsRepository from '../../repositories/workouts-plans/WorkoutsPlansWorkoutsRepository';
import WorkoutsRepository from '../../repositories/workouts/WorkoutsRepository';

class WorkoutsPlansWorkoutsController {
  async index(req: Request, res: Response) {
    const workoutPlanWorkouts = await WorkoutsPlansWorkoutsRepository.findAll();
    res.send({ workoutPlanWorkouts });
  }

  async store(req: Request, res: Response) {
    const { workoutPlanId, workoutId } = req.body;

    const someFieldIsEmpty = isSomeEmpty([workoutPlanId, workoutId]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        workoutPlanWorkout: null,
      });
    }

    const workoutPlanExists = await WorkoutsPlansRepository.findById(
      workoutPlanId
    );
    if (!workoutPlanExists) {
      return res.status(400).json({
        message: 'Plano de treino não encontrado',
        workoutPlanWorkout: null,
      });
    }

    const workoutExists = await WorkoutsRepository.findById(workoutId);
    if (!workoutExists) {
      return res.status(400).json({
        message: 'Treino não encontrado',
        workoutPlanWorkout: null,
      });
    }

    const workoutPlanWorkout = await WorkoutsPlansWorkoutsRepository.create({
      workouts_plan_id: workoutPlanId,
      workout_id: workoutId,
    });
    res.status(200).send({
      message: 'Treino do plano de treino criado',
      workoutPlanWorkout,
    });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const workoutPlanWorkoutExists =
      await WorkoutsPlansWorkoutsRepository.findById(parsedId);
    if (!workoutPlanWorkoutExists) {
      return res.status(400).json({
        message: 'Treino do plano de treino não encontrado',
        workoutPlanWorkout: null,
      });
    }

    await WorkoutsPlansWorkoutsRepository.delete(parsedId);
    res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const workoutPlanWorkoutExists =
      await WorkoutsPlansWorkoutsRepository.findById(parsedId);
    if (!workoutPlanWorkoutExists) {
      return res.status(400).json({
        message: 'Treino do plano de treino não encontrado',
        workoutPlanWorkout: null,
      });
    }

    res.send({ workoutPlanWorkout: workoutPlanWorkoutExists });
  }

  async update(req: Request, res: Response) {
    const { workoutPlanId, workoutId } = req.body;
    const { id } = req.params;
    const parsedId = Number(id);

    const someFieldIsEmpty = isSomeEmpty([workoutPlanId, workoutId]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        workoutPlanWorkout: null,
      });
    }

    const workoutPlanWorkoutExists =
      await WorkoutsPlansWorkoutsRepository.findById(parsedId);
    if (!workoutPlanWorkoutExists) {
      return res.status(400).json({
        message: 'Treino do plano de treino não encontrado',
        workoutPlanWorkout: null,
      });
    }

    const workoutPlanExists = await WorkoutsPlansRepository.findById(
      workoutPlanId
    );
    if (!workoutPlanExists) {
      return res.status(400).json({
        message: 'Plano de treino não encontrado',
        workoutPlanWorkout: null,
      });
    }

    const workoutExists = await WorkoutsRepository.findById(workoutId);
    if (!workoutExists) {
      return res.status(400).json({
        message: 'Treino não encontrado',
        workoutPlanWorkout: null,
      });
    }

    const workout_id = Number.isNaN(Number(workoutId))
      ? undefined
      : Number(workoutId);

    const workouts_plan_id = Number.isNaN(Number(workoutPlanId))
      ? undefined
      : Number(workoutPlanId);

    const updatedWorkoutPlanWorkout =
      await WorkoutsPlansWorkoutsRepository.update({
        id: parsedId,
        workout_id,
        workouts_plan_id,
      });

    return res.status(200).json({
      message: 'Treino do plano de treino atualizado',
      workoutPlanWorkout: updatedWorkoutPlanWorkout,
    });
  }
}

export default new WorkoutsPlansWorkoutsController();
