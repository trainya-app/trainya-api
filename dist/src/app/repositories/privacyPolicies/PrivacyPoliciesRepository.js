"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { privacyPolicie } = new client_1.PrismaClient();
class PrivacyPoliciesRepository {
    async findAll() {
        return privacyPolicie.findFirst();
    }
    async create(content) {
        return privacyPolicie.create({
            data: {
                content,
            },
            select: {
                id: true,
                content: true,
            },
        });
    }
    async update({ id, content }) {
        return await privacyPolicie.update({
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
    }
}
exports.default = new PrivacyPoliciesRepository();
