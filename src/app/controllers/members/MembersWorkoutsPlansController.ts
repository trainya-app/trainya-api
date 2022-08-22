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
      return res.status(400).json({
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

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const memberWorkoutPlanExists =
      await MembersWorkoutsPlansRepository.findById(parsedId);
    if (!memberWorkoutPlanExists) {
      return res.status(400).json({
        message: 'Plano de treino do membro não encontrado',
        memberWorkoutPlan: null,
      });
    }

    await MembersWorkoutsPlansRepository.delete(parsedId);
    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const memberWorkoutPlanExists =
      await MembersWorkoutsPlansRepository.findById(parsedId);
    if (!memberWorkoutPlanExists) {
      return res.status(400).json({
        message: 'Plano de treino do membro não encontrado',
        memberWorkoutPlan: null,
      });
    }

    return res.status(200).json({
      message: 'Plano de treino do membro encontrado',
      memberWorkoutPlan: memberWorkoutPlanExists,
    });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
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

    const memberWorkoutPlanExists =
      await MembersWorkoutsPlansRepository.findById(parsedId);
    if (!memberWorkoutPlanExists) {
      return res.status(400).json({
        message: 'Plano de treino do membro não encontrado',
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
      return res.status(400).json({
        message: 'Plano de treino não encontrado',
        memberWorkoutPlan: null,
      });
    }

    const member_id = Number.isNaN(Number(memberId))
      ? undefined
      : Number(memberId);
    const workouts_plan_id = Number.isNaN(Number(workoutPlanId))
      ? undefined
      : Number(workoutPlanId);

    const updatedMemberWorkoutPlan =
      await MembersWorkoutsPlansRepository.update({
        id: parsedId,
        member_id,
        workouts_plan_id,
        started_at: startedAt,
        finish_at: finishAt,
        finished_at: finishedAt,
      });

    return res.status(200).json({
      message: 'Plano de treino do membro atualizado',
      memberWorkoutPlan: updatedMemberWorkoutPlan,
    });
  }
}

export default new MembersWorkoutsPlansController();
