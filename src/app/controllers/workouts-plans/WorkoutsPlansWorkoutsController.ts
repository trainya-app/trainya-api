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
    res
      .status(200)
      .send({
        message: 'Treino do plano de treino criado',
        workoutPlanWorkout,
      });
  }
}

export default new WorkoutsPlansWorkoutsController();
