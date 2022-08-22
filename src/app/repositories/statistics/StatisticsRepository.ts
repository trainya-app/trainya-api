import { PrismaClient } from '@prisma/client';
const { statistic } = new PrismaClient();

interface IStatistic {
  description: string;
}

class StatisticsRepository {
  async findAll() {
    const statistics = await statistic.findMany();
    return statistics;
  }

  async findByDescription(description: string) {
    const descriptionExists = await statistic.findFirst({
      where: {
        description,
      },
    });
    return descriptionExists;
  }

  async create({ description }: IStatistic) {
    const createdStatistic = await statistic.create({
      data: {
        description,
      },
    });

    return createdStatistic;
  }

  async findById(id: number) {
    const statisticExists = await statistic.findFirst({
      where: {
        id,
      },
    });

    return statisticExists;
  }

  async delete(id: number) {
    await statistic.delete({
      where: {
        id,
      },
    });

    return true;
  }
}

export default new StatisticsRepository();
