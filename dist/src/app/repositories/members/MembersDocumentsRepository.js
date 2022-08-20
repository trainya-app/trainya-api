"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { memberDocument } = new client_1.PrismaClient();
class MembersDocumentsRepository {
    async findAll() {
        const memberDocuments = await memberDocument.findMany();
        return memberDocuments;
    }
    async create({ member_id, document_id, value }) {
        const createdMemberDocument = await memberDocument.create({
            data: {
                member_id,
                document_id,
                value,
            },
        });
        return createdMemberDocument;
    }
    async findById(id) {
        const memberDocumentExists = await memberDocument.findFirst({
            where: {
                id,
            },
        });
        return memberDocumentExists;
    }
    async delete(id) {
        const memberDocumentExists = await memberDocument.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, member_id, document_id, value }) {
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
exports.default = new MembersDocumentsRepository();
