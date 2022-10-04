"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { month } = new client_1.PrismaClient();
class MonthsRepository {
    async findAll() {
        return await month.findMany();
    }
    async findByName(name) {
        return await month.findFirst({
            where: {
                name,
            },
            select: {
                id: true,
                name: true,
            },
        });
    }
    async create({ name }) {
        return await month.create({
            data: {
                name,
            },
            select: {
                id: true,
                name: true,
            },
        });
    }
}
exports.default = new MonthsRepository();
