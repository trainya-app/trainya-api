import { PrismaClient } from '@prisma/client';
const { memberGoal } = new PrismaClient();

class MembersGoalsRepository {
  async findAll() {
    const memberGoals = await memberGoal.findMany();
    return memberGoals;
  }
}

export default new MembersGoalsRepository();
