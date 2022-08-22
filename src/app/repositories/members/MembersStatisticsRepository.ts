import { PrismaClient } from '@prisma/client';
const { memberStatistic } = new PrismaClient();

interface IMemberStatistic {
  member_id: number;
  statistic_id: number;
  value: string;
}

class MembersStatisticsRepository {
  async findAll() {
    const memberStatistics = memberStatistic.findMany();
    return memberStatistics;
  }

  async create({ member_id, statistic_id, value }: IMemberStatistic) {
    const createdMemberStatistic = await memberStatistic.create({
      data: {
        member_id,
        statistic_id,
        value,
      },
    });

    return createdMemberStatistic;
  }
}

export default new MembersStatisticsRepository();
