import { PrismaClient } from '@prisma/client';
import { resolve } from 'path';
import { NumberLiteralType } from 'typescript';
const { memberDocument } = new PrismaClient();

interface IMemberDocument {
  member_id: number;
  document_id: number;
  value: number;
}
interface IUpdateMemberDocument {
  id: number;
  member_id?: number;
  document_id?: number;
  value?: number;
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

  async findById(id: number) {
    const memberDocumentExists = await memberDocument.findFirst({
      where: {
        id,
      },
    });

    return memberDocumentExists;
  }

  async delete(id: number) {
    const memberDocumentExists = await memberDocument.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async update({ id, member_id, document_id, value }: IUpdateMemberDocument) {
    const updatedMemberDocument = await memberDocument.update({
      where: {
        id,
      },
      data: {
        member_id,
        document_id,
        value,
      },
    });

    return updatedMemberDocument;
  }
}

export default new MembersDocumentsRepository();
