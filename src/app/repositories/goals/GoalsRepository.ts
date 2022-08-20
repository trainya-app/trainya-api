import { PrismaClient } from '@prisma/client';
const { goal } = new PrismaClient();

interface IGoal {
  description: string;
}

class GoalsRepository {
  async findAll() {
    const goals = await goal.findMany();
    return goals;
  }

  async create({ description }: IGoal) {
    const createdGoal = await goal.create({
      data: {
        description,
      },
    });
    return createdGoal;
  }

  async findByDescription({ description }: IGoal) {
    const goalExists = await goal.findFirst({
      where: {
        description,
      },
    });
    return goalExists;
  }
}

export default new GoalsRepository();
