"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { goal } = new client_1.PrismaClient();
class GoalsRepository {
    async findAll() {
        const goals = await goal.findMany();
        return goals;
    }
    async create({ description }) {
        const createdGoal = await goal.create({
            data: {
                description,
            },
        });
        return createdGoal;
    }
    async findByDescription({ description }) {
        const goalExists = await goal.findFirst({
            where: {
                description,
            },
        });
        return goalExists;
    }
    async findById(id) {
        const goalExists = await goal.findFirst({
            where: {
                id,
            },
        });
        return goalExists;
    }
    async delete(id) {
        const deletedGoal = await goal.delete({
            where: {
                id,
            },
        });
        return deletedGoal;
    }
    async update({ id, description }) {
        const updatedGoal = await goal.update({
            where: {
                id,
            },
            data: {
                description,
            },
        });
        return updatedGoal;
    }
}
exports.default = new GoalsRepository();
