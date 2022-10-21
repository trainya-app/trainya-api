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
      select: {
        id: true,
        member_id: true,
        member: {
          select: {
            name: true,
          },
        },
        workouts_plan_id: true,
        workoutPlan: {
          select: {
            goal: true,
          },
        },
        finish_at: true,
        started_at: true,
        finished_at: true,
      },
    });

    return createdMemberWorkoutPlan;
  }

  async findById(memberId: number) {
    const memberWorkoutPlanExists = await memberWorkoutPlan.findFirst({
      where: {
        member_id: memberId,
      },
      include: {
        workoutPlan: {
          include: {
            workoutPlanWorkout: {
              include: {
                workout: {
                  include: {
                    workoutExercise: {
                      include: {
                        exercise: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
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

  async findByMemberId(member_id: number) {
    const memberWorkoutPlanExists = await memberWorkoutPlan.findFirst({
      where: {
        member_id,
      },
      select: {
        workouts_plan_id: true,
        workoutPlan: {
          select: {
            goal: true,
            workoutPlanWorkout: {
              select: {
                workout: {
                  select: {
                    id: true,
                    title: true,
                    workoutExercise: {
                      select: {
                        exercise: {
                          select: {
                            name: true,
                            comment: true,
                          },
                        },
                        repetitions: true,
                        sets: true,
                      },
                    },
                    duration: true,
                  },
                },
              },
            },
          },
        },
        finish_at: true,
        finished_at: true,
        started_at: true,
      },
    });
    return memberWorkoutPlanExists;
  }

  async findByMemberIdAndWorkoutPlanId({
    memberId,
    workoutPlanId,
  }: {
    memberId: number;
    workoutPlanId: number;
  }) {
    const memberExistsInWorkoutPlan = await memberWorkoutPlan.findFirst({
      where: {
        member_id: memberId,
        workouts_plan_id: workoutPlanId,
      },
    });
    return memberExistsInWorkoutPlan;
  }
}

export default new MembersWorkoutsPlansRepository();
