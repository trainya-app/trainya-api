import { PrismaClient } from '@prisma/client';
const { memberMonthDayProgress } = new PrismaClient();

class MemberMonthsDayProgressRepository {
  async findAll() {
    return await memberMonthDayProgress.findMany({
      select: {
        id: true,
        member: {
          select: {
            name: true,
          },
        },
        month: {
          select: {
            name: true,
          },
        },
        current_progress: true,
      },
    });
  }

  async create({
    member_id,
    month_id,
  }: {
    member_id: number;
    month_id: number;
  }) {
    const createdMemberMonthsDayProgresses =
      await memberMonthDayProgress.create({
        data: {
          member_id,
          month_id,
        },
        select: {
          id: true,
          member: {
            select: {
              name: true,
            },
          },
          month: {
            select: {
              name: true,
            },
          },
          current_progress: true,
        },
      });
    return createdMemberMonthsDayProgresses;
  }

  async deleteAllByMember(member_id: number) {
    await memberMonthDayProgress.deleteMany({
      where: {
        member_id,
      },
    });
    return;
  }

  async findByMemberId(member_id: number) {
    return await memberMonthDayProgress.findMany({
      where: {
        member_id,
      },
      select: {
        id: true,
        member_id: true,
        member: {
          select: {
            name: true,
          },
        },
        month_id: true,
        month: {
          select: {
            name: true,
          },
        },
        current_progress: true,
      },
    });
  }

  async findByMemberAndMonthId({
    member_id,
    month_id,
  }: {
    member_id: number;
    month_id: number;
  }) {
    return await memberMonthDayProgress.findFirst({
      where: {
        member_id,
        month_id,
      },
      select: {
        id: true,
        member_id: true,
        member: {
          select: {
            name: true,
          },
        },
        month_id: true,
        month: {
          select: {
            name: true,
          },
        },
        current_progress: true,
      },
    });
  }

  async updateProgress({
    id,
    current_progress,
  }: {
    id: number;
    current_progress: number;
  }) {
    const updatedProgress = await memberMonthDayProgress.update({
      where: {
        id,
      },
      data: {
        current_progress,
      },
    });
    return updatedProgress;
  }
}

export default new MemberMonthsDayProgressRepository();
