import { PrismaClient } from '@prisma/client';
const { memberWorkoutPlan } = new PrismaClient();

class MembersWorkoutsPlansRepository {
  async findAll() {
    const memberWorkoutPlans = await memberWorkoutPlan.findMany();
    return memberWorkoutPlans;
  }
}

export default new MembersWorkoutsPlansRepository();
