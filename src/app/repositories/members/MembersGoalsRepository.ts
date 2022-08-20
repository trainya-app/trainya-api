import { PrismaClient } from '@prisma/client';
const { memberGoal } = new PrismaClient();

interface IMemberGoal {
  member_id: number;
  goal_id: number;
  desired_progress: number;
  current_progress: number;
  started_at: string;
  finish_at: string;
  finished_at: string;
}

interface IUpdateMemberGoal {
  id: number;
  member_id?: number;
  goal_id?: number;
  desired_progress?: number;
  current_progress?: number;
  started_at: string;
  finish_at: string;
  finished_at: string;
}

class MembersGoalsRepository {
  async findAll() {
    const memberGoals = await memberGoal.findMany();
    return memberGoals;
  }

  async store({
    member_id,
    goal_id,
    desired_progress,
    current_progress,
    started_at,
    finish_at,
    finished_at,
  }: IMemberGoal) {
    const createdMemberGoal = await memberGoal.create({
      data: {
        member_id,
        goal_id,
        desired_progress,
        current_progress,
        started_at,
        finish_at,
        finished_at,
      },
    });
    return createdMemberGoal;
  }

  async delete(id: number) {
    await memberGoal.delete({
      where: { id },
    });
    return true;
  }

  async findById(id: number) {
    const memberGoalExists = await memberGoal.findFirst({
      where: { id },
    });
    return memberGoalExists;
  }

  async update({
    id,
    member_id,
    goal_id,
    desired_progress,
    current_progress,
    started_at,
    finish_at,
    finished_at,
  }: IUpdateMemberGoal) {
    const updatedMemberGoal = await memberGoal.update({
      where: { id },
      data: {
        member_id,
        goal_id,
        desired_progress,
        current_progress,
        started_at,
        finish_at,
        finished_at,
      },
    });
    return updatedMemberGoal;
  }
}

export default new MembersGoalsRepository();
