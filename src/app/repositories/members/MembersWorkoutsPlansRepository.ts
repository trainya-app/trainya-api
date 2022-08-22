import { PrismaClient } from '@prisma/client';
const { memberWorkoutPlan } = new PrismaClient();

interface IMemberWorkoutPlan {
  member_id: number;
  workouts_plan_id: number;
  started_at: string;
  finish_at: string;
  finished_at: string;
}

interface IUpdateMemberWorkoutPlan {
  id: number;
  member_id?: number;
  workouts_plan_id?: number;
  started_at: string;
  finish_at: string;
  finished_at: string;
}

class MembersWorkoutsPlansRepository {
  async findAll() {
    const memberWorkoutPlans = await memberWorkoutPlan.findMany();
    return memberWorkoutPlans;
  }

  async create({
    member_id,
    workouts_plan_id,
    finish_at,
    finished_at,
    started_at,
  }: IMemberWorkoutPlan) {
    const createdMemberWorkoutPlan = await memberWorkoutPlan.create({
      data: {
        member_id,
        workouts_plan_id,
        finish_at,
        finished_at,
        started_at,
      },
    });

    return createdMemberWorkoutPlan;
  }

  async findById(id: number) {
    const memberWorkoutPlanExists = await memberWorkoutPlan.findFirst({
      where: {
        id,
      },
    });
    return memberWorkoutPlanExists;
  }

  async delete(id: number) {
    await memberWorkoutPlan.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async update({
    id,
    finish_at,
    finished_at,
    started_at,
    member_id,
    workouts_plan_id,
  }: IUpdateMemberWorkoutPlan) {
    const updatedMemberWorkoutPlan = await memberWorkoutPlan.update({
      data: {
        finish_at,
        finished_at,
        started_at,
        member_id,
        workouts_plan_id,
      },

      where: {
        id,
      },
    });

    return updatedMemberWorkoutPlan;
  }
}

export default new MembersWorkoutsPlansRepository();
