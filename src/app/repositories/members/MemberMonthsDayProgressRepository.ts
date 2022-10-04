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
}

export default new MemberMonthsDayProgressRepository();
