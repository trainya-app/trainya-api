import { PrismaClient } from '@prisma/client';
const { memberStatistic } = new PrismaClient();
class MembersStatisticsRepository {
  async findAll() {
    const memberStatistics = memberStatistic.findMany();
    return memberStatistics;
  }
}

export default new MembersStatisticsRepository();
