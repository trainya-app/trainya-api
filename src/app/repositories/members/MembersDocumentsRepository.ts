import { PrismaClient } from '@prisma/client';
import { resolve } from 'path';
const { memberDocument } = new PrismaClient();

interface IMemberDocument {
  member_id: number;
  document_id: number;
  value: number;
}

class MembersDocumentsRepository {
  async findAll() {
    const memberDocuments = await memberDocument.findMany();

    return memberDocuments;
  }

  async create({ member_id, document_id, value }: IMemberDocument) {
    const createdMemberDocument = await memberDocument.create({
      data: {
        member_id,
        document_id,
        value,
      },
    });

    return createdMemberDocument;
  }
}

export default new MembersDocumentsRepository();
