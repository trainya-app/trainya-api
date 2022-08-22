import { PrismaClient } from '@prisma/client';
const { classWeekDay } = new PrismaClient();

interface IClassWeekDay {
  class_id: number;
  week_day_id: number;
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
}

export default new DocumentsRepository();
