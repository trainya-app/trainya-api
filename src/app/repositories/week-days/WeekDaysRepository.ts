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

  async findById(id: number) {
    const weekDayExists = await weekDay.findFirst({
      where: {
        id,
      },
    });
    return weekDayExists;
  }

  async delete(id: number) {
    await weekDay.delete({
      where: {
        id,
      },
    });

    return true;
  }
}

export default new WeekDaysRepository();
