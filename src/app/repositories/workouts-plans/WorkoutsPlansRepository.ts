import { PrismaClient, WorkoutPlanWorkout } from '@prisma/client';
const { workoutPlan } = new PrismaClient();

interface IWorkoutPlan {
  employee_id: number;
  goal: string;
  workoutPlanWorkouts: WorkoutPlanWorkout[];
}

interface IUpdateWorkoutPlan {
  id: number;
  employee_id?: number;
  goal: string;
}

class WorkoutsPlansRepository {
  async findAll() {
    const workoutPlans = await workoutPlan.findMany({
      select: {
        id: true,
        employee_id: true,
        goal: true,
        employee: {
          select: {
            name: true,
          },
        },
        workoutPlanWorkout: {
          select: {
            id: true,
            workout: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
        memberWorkoutPlan: {
          select: {
            id: true,
          },
        },
      },
    });
    return workoutPlans;
  }

  async create({ employee_id, goal, workoutPlanWorkouts }: IWorkoutPlan) {
    const createdWorkoutPlan = await workoutPlan.create({
      data: {
        employee_id,
        goal,
        workoutPlanWorkout: {
          createMany: {
            data: workoutPlanWorkouts,
          },
        },
      },
      select: {
        id: true,
        employee_id: true,
        employee: {
          select: {
            name: true,
          },
        },
        goal: true,
      },
    });
    return createdWorkoutPlan;
  }

  async findById(id: number) {
    const workoutPlanExists = await workoutPlan.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        employee_id: true,
        goal: true,
        employee: {
          select: {
            name: true,
          },
        },
        workoutPlanWorkout: {
          select: {
            id: true,
            workout: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
        memberWorkoutPlan: {
          select: {
            member: true,
          },
        },
      },
    });
    return workoutPlanExists;
  }

  async delete(id: number) {
    await workoutPlan.delete({
      where: {
        id,
      },
    });
    return true;
  }

  async update({ id, employee_id, goal }: IUpdateWorkoutPlan) {
    const updatedWorkoutPlan = await workoutPlan.update({
      data: {
        employee_id,
        goal,
      },
      where: {
        id,
      },
    });

    return updatedWorkoutPlan;
  }
}

export default new WorkoutsPlansRepository();
