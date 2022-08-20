"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { document } = new client_1.PrismaClient();
class DocumentsRepository {
    async findAll() {
        const documents = await document.findMany();
        return documents;
    }
    async create({ name }) {
        const createdDocument = await document.create({
            data: {
                name,
            },
        });
        return createdDocument;
    }
    async findByName({ name }) {
        const documentByName = await document.findFirst({
            where: {
                name,
            },
        });
        return documentByName;
    }
    async findById(id) {
        const documentById = await document.findFirst({
            where: {
                id,
            },
        });
        return documentById;
    }
    async delete(id) {
        await document.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ name, id }) {
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
    async findIdByName({ name }) {
        const id = await document.findFirst({
            where: {
                name,
            },
        });
        return id;
    }
}
exports.default = new DocumentsRepository();
