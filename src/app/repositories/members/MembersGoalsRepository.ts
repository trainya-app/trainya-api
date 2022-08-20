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
}

export default new MembersGoalsRepository();
