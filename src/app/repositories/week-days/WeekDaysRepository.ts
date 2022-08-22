import { PrismaClient } from '@prisma/client';
const { weekDay } = new PrismaClient();

class WeekDaysRepository {
  async findAll() {
    const weekDays = await weekDay.findMany();
    return weekDays;
  }
}

export default new WeekDaysRepository();
