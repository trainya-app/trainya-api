import { PrismaClient } from '@prisma/client';
const { goal } = new PrismaClient();

interface IGoal {
  description: string;
}

interface IUpdateGoal {
  id: number;
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

  async findById(id: number) {
    const goalExists = await goal.findFirst({
      where: {
        id,
      },
    });
    return goalExists;
  }

  async delete(id: number) {
    const deletedGoal = await goal.delete({
      where: {
        id,
      },
    });
    return deletedGoal;
  }

  async update({ id, description }: IUpdateGoal) {
    const updatedGoal = await goal.update({
      where: {
        id,
      },
      data: {
        description,
      },
    });
    return updatedGoal;
  }
}

export default new GoalsRepository();
