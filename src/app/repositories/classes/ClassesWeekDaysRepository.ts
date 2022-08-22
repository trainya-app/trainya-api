import { PrismaClient } from '@prisma/client';
const { classWeekDay } = new PrismaClient();

interface IClassWeekDay {
  class_id: number;
  week_day_id: number;
}

interface IUpdateClassWeekDay {
  id: number;
  class_id?: number;
  week_day_id?: number;
}

class DocumentsRepository {
  async findAll() {
    const documents = await classWeekDay.findMany();
    return documents;
  }

  async create({ week_day_id, class_id }: IClassWeekDay) {
    const createdClassWeekDay = await classWeekDay.create({
      data: {
        week_day_id,
        class_id,
      },
    });
    return createdClassWeekDay;
  }

  async findById(id: number) {
    const classWeekDayExists = await classWeekDay.findFirst({
      where: {
        id,
      },
    });
    return classWeekDayExists;
  }

  async delete(id: number) {
    await classWeekDay.delete({
      where: {
        id,
      },
    });
    return true;
  }

  async update({ id, week_day_id, class_id }: IUpdateClassWeekDay) {
    const updatedClassWeekDay = await classWeekDay.update({
      where: {
        id,
      },
      data: {
        week_day_id,
        class_id,
      },
    });
    return updatedClassWeekDay;
  }
}

export default new DocumentsRepository();
