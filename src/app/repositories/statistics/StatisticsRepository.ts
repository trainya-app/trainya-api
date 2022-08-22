import { PrismaClient } from '@prisma/client';
const { statistic } = new PrismaClient();

class StatisticsRepository {
  async findAll() {
    const statistics = await statistic.findMany();
    return statistics;
  }
}

export default new StatisticsRepository();
