"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { term } = new client_1.PrismaClient();
class TermsRepository {
    async getTerms() {
        const terms = await term.findFirst();
        return terms;
    }
    async create(content) {
        const createdTerm = await term.create({
            data: {
                content,
            },
            select: {
                id: true,
                content: true,
            },
        });
        return createdTerm;
    }
    async update({ id, content }) {
        const updatedTerm = await term.update({
            where: {
                id,
            },
            data: {
                content,
            },
            select: {
                id: true,
                content: true,
            },
        });
        return updatedTerm;
    }
}
exports.default = new TermsRepository();
