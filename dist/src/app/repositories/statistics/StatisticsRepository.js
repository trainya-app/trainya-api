"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { statistic } = new client_1.PrismaClient();
class StatisticsRepository {
    async findAll() {
        const statistics = await statistic.findMany();
        return statistics;
    }
    async findByDescription(description) {
        const descriptionExists = await statistic.findFirst({
            where: {
                description,
            },
        });
        return descriptionExists;
    }
    async create({ description }) {
        const createdStatistic = await statistic.create({
            data: {
                description,
            },
        });
        return createdStatistic;
    }
    async findById(id) {
        const statisticExists = await statistic.findFirst({
            where: {
                id,
            },
        });
        return statisticExists;
    }
    async delete(id) {
        await statistic.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, description }) {
        const updatedStatistic = await statistic.update({
            data: {
                description,
            },
            where: {
                id,
            },
        });
        return updatedStatistic;
    }
}
exports.default = new StatisticsRepository();
