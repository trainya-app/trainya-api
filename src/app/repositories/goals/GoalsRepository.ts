import { PrismaClient } from '@prisma/client';
const { goal } = new PrismaClient();

class GoalsRepository {
  async findAll() {
    const goals = await goal.findMany();
    return goals;
  }
}

export default new GoalsRepository();
