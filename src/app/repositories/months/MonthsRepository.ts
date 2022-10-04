import { PrismaClient } from '@prisma/client';
const { month } = new PrismaClient();

class MonthsRepository {
  async findAll() {
    return await month.findMany();
  }

  async findByName(name: string) {
    return await month.findFirst({
      where: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });
  }

  async create({ name }: { name: string }) {
    return await month.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });
  }
}

export default new MonthsRepository();
