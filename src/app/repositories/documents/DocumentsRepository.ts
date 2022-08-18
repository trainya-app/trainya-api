import { PrismaClient } from '@prisma/client';
const { document } = new PrismaClient();

class DocumentsRepository {
  async findAll() {
    const documents = await document.findMany();

    return documents;
  }
}

export default new DocumentsRepository();
