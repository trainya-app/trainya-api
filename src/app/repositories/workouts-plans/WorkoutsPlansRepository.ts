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
}

export default new WorkoutsPlansRepository();
