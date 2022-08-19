import { PrismaClient } from '@prisma/client';
import { NumericLiteral } from 'typescript';
const { document } = new PrismaClient();

interface IDocument {
  name: string;
}

interface IUpdateDocument {
  id: number;
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

  async findById(id: number) {
    const documentById = await document.findFirst({
      where: {
        id,
      },
    });
    return documentById;
  }

  async delete(id: number) {
    await document.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async update({ name, id }: IUpdateDocument) {
    const updatedDocument = await document.update({
      data: {
        name,
      },
      where: {
        id,
      },
    });

    return updatedDocument;
  }

  async findIdByName({ name }: IDocument) {
    const id = await document.findFirst({
      where: {
        name,
      },
    });

    return id as { id: number };
  }
}

export default new DocumentsRepository();
