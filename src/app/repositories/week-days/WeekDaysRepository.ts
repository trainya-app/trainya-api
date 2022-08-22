import { PrismaClient } from '@prisma/client';
const { weekDay } = new PrismaClient();

interface IWeekDay {
  name: string;
}

interface IUpdateWeekDay {
  id: number;
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

  async update({ id, name }: IUpdateWeekDay) {
    const updatedWeekDay = await weekDay.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return updatedWeekDay;
  }
}

export default new WeekDaysRepository();
