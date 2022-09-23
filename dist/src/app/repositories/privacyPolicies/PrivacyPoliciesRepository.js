"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { privacyPolicies } = new client_1.PrismaClient();
class PrivacyPoliciesRepository {
    async findAll() {
        return privacyPolicies.findFirst();
    }
    async create(content) {
        return privacyPolicies.create({
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
        return await privacyPolicies.update({
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
