import { PrismaClient } from '@prisma/client';
import { resolve } from 'path';
const { memberDocument } = new PrismaClient();

class MembersDocumentsRepository {
  async findAll() {
    const memberDocuments = await memberDocument.findMany();

    return memberDocuments;
  }
}

export default new MembersDocumentsRepository();
