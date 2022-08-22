import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import MembersRepository from '../../repositories/members/MembersRepository';
import MembersWorkoutsPlansRepository from '../../repositories/members/MembersWorkoutsPlansRepository';
import WorkoutsPlansRepository from '../../repositories/workouts-plans/WorkoutsPlansRepository';

class MembersWorkoutsPlansController {
  async index(req: Request, res: Response) {
    const memberWorkoutPlans = await MembersWorkoutsPlansRepository.findAll();
    return res.send({ memberWorkoutPlans });
  }

  async store(req: Request, res: Response) {
    const { memberId, workoutPlanId, startedAt, finishAt, finishedAt } =
      req.body;
    const someFieldIsEmpty = isSomeEmpty([
      memberId,
      workoutPlanId,
      startedAt,
      finishAt,
      finishedAt,
    ]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        memberWorkoutPlan: null,
      });
    }

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res
        .status(400)
        .json({ message: 'Membro não encontrado', memberWorkoutPlan: null });
    }

    const workoutPlanExists = await WorkoutsPlansRepository.findById(
      workoutPlanId
    );
    if (!workoutPlanExists) {
      return res
        .status(400)
        .json({
          message: 'Plano de treino não encontrado',
          memberWorkoutPlan: null,
        });
    }

    const memberWorkoutPlans = await MembersWorkoutsPlansRepository.create({
      member_id: memberId,
      workouts_plan_id: workoutPlanId,
      started_at: startedAt,
      finish_at: finishAt,
      finished_at: finishedAt,
    });
    return res.status(200).send({
      message: 'Plano de treino do membro criado',
      memberWorkoutPlans,
    });
  }
}

export default new MembersWorkoutsPlansController();
