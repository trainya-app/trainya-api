import { PrismaClient } from '@prisma/client';
const { document } = new PrismaClient();

interface IDocument {
  name: string;
}

class DocumentsRepository {
  async findAll() {
    const documents = await document.findMany();

    return documents;
  }

  async create({ name }: IDocument) {
    const createdDocument = await document.create({
      data: {
        name,
      },
    });

    return createdDocument;
  }

  async findByName({ name }: IDocument) {
    const documentByName = await document.findFirst({
      where: {
        name,
      },
    });
    return documentByName;
  }
}

export default new DocumentsRepository();
