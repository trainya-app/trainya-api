import { PrismaClient } from '@prisma/client';
const { classWeekDay } = new PrismaClient();

class DocumentsRepository {
  async findAll() {
    const documents = await classWeekDay.findMany();
    return documents;
  }
}

export default new DocumentsRepository();
