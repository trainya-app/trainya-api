import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import GoalsRepository from '../../repositories/goals/GoalsRepository';
import MembersGoalsRepository from '../../repositories/members/MembersGoalsRepository';
import MembersRepository from '../../repositories/members/MembersRepository';

class MembersGoalsController {
  async index(req: Request, res: Response) {
    const memberGoals = await MembersGoalsRepository.findAll();
    return res.send({ memberGoals });
  }

  async store(req: Request, res: Response) {
    const {
      memberId,
      goalId,
      desiredProgress,
      currentProgress,
      startedAt,
      finishAt,
      finishedAt,
    } = req.body;

    const someFieldIsEmpty = isSomeEmpty([
      memberId,
      goalId,
      desiredProgress,
      currentProgress,
      startedAt,
      finishAt,
      finishedAt,
    ]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram preenchidos',
        memberGoal: null,
      });
    }

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res.status(400).json({
        message: 'Membro não encontrado',
        memberGoal: null,
      });
    }

    const goalExists = await GoalsRepository.findById(goalId);
    if (!goalExists) {
      return res.status(400).json({
        message: 'Meta não encontrado',
        memberGoal: null,
      });
    }

    const memberGoal = await MembersGoalsRepository.store({
      member_id: memberId,
      goal_id: goalId,
      desired_progress: desiredProgress,
      current_progress: currentProgress,
      started_at: startedAt,
      finish_at: finishAt,
      finished_at: finishedAt,
    });
    return res
      .status(200)
      .send({ message: 'Meta do membro criada', memberGoal });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const memberGoalExists = await MembersGoalsRepository.findById(parsedId);
    if (!memberGoalExists) {
      return res.status(400).json({
        message: 'Meta do membro não encontrada',
        memberGoal: null,
      });
    }

    await MembersGoalsRepository.delete(parsedId);
    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const memberGoalExists = await MembersGoalsRepository.findById(parsedId);
    if (!memberGoalExists) {
      return res.status(400).json({
        message: 'Meta do membro não encontrada',
        memberGoal: null,
      });
    }

    return res
      .status(200)
      .json({
        message: 'Meta do membro encontrada',
        memberGoal: memberGoalExists,
      });
  }
}

export default new MembersGoalsController();
