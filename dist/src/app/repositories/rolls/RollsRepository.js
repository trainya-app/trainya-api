"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { roll } = new client_1.PrismaClient();
class RollsRepository {
    async findAll() {
        const rolls = await roll.findMany();
        return rolls;
    }
    async findByTitle({ title }) {
        const rollExists = roll.findFirst({
            select: {
                title: true,
            },
            where: {
                title,
            },
        });
        return rollExists;
    }
    async create({ title, access_level }) {
        const createdRoll = await roll.create({
            data: {
                title,
                access_level,
            },
            select: {
                title: true,
                access_level: true,
            },
        });
        return createdRoll;
    }
    async findById(id) {
        const rollExists = await roll.findFirst({
            where: {
                id,
            },
        });
        return rollExists;
    }
    async delete(id) {
        await roll.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ title, access_level, id }) {
        const updatedRoll = await roll.update({
            where: {
                id,
            },
            data: {
                title,
                access_level,
            },
        });
        return updatedRoll;
    }
}
exports.default = new RollsRepository();
