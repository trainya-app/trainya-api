import { PrismaClient } from '@prisma/client';
const { workoutPlan } = new PrismaClient();
class WorkoutsPlansRepository {
  async findAll() {
    const workoutPlans = await workoutPlan.findMany();
    return workoutPlans;
  }
}

export default new WorkoutsPlansRepository();
