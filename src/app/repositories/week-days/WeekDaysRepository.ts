import { PrismaClient } from '@prisma/client';
const { weekDay } = new PrismaClient();

interface IWeekDay {
  name: string;
}

class WeekDaysRepository {
  async findAll() {
    const weekDays = await weekDay.findMany();
    return weekDays;
  }

  async findByName(name: string) {
    const nameExists = await weekDay.findFirst({
      where: {
        name,
      },
    });
    return nameExists;
  }

  async create({ name }: IWeekDay) {
    const createdWeekDay = await weekDay.create({
      data: {
        name,
      },
    });
    return createdWeekDay;
  }
}

export default new WeekDaysRepository();
