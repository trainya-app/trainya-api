import { PrismaClient } from '@prisma/client';
const { memberStatistic } = new PrismaClient();

interface IMemberStatistic {
  member_id: number;
  statistic_id: number;
  value: string;
}

interface IUpdateMemberStatistic {
  id: number;
  member_id?: number;
  statistic_id?: number;
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

  async findById(id: number) {
    const memberStatisticExists = await memberStatistic.findFirst({
      where: {
        id,
      },
    });

    return memberStatisticExists;
  }

  async delete(id: number) {
    await memberStatistic.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async update({ id, member_id, statistic_id, value }: IUpdateMemberStatistic) {
    const updatedMemberStatistic = await memberStatistic.update({
      data: {
        member_id,
        statistic_id,
        value,
      },
      where: {
        id,
      },
    });

    return updatedMemberStatistic;
  }
}

export default new MembersStatisticsRepository();
