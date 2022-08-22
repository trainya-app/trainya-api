import { PrismaClient } from '@prisma/client';
const { workoutPlan } = new PrismaClient();

interface IWorkoutPlan {
  employee_id: number;
  goal: string;
}

class WorkoutsPlansRepository {
  async findAll() {
    const workoutPlans = await workoutPlan.findMany();
    return workoutPlans;
  }

  async create({ employee_id, goal }: IWorkoutPlan) {
    const createdWorkoutPlan = await workoutPlan.create({
      data: {
        employee_id,
        goal,
      },
    });
    return createdWorkoutPlan;
  }

  async findById(id: number) {
    const workoutPlanExists = await workoutPlan.findFirst({
      where: {
        id,
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
}

export default new WorkoutsPlansRepository();
