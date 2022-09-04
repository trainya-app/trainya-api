"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { weekDay } = new client_1.PrismaClient();
class WeekDaysRepository {
    async findAll() {
        const weekDays = await weekDay.findMany();
        return weekDays;
    }
    async findByName(name) {
        const nameExists = await weekDay.findFirst({
            where: {
                name,
            },
        });
        return nameExists;
    }
    async create({ name }) {
        const createdWeekDay = await weekDay.create({
            data: {
                name,
            },
        });
        return createdWeekDay;
    }
    async findById(id) {
        const weekDayExists = await weekDay.findFirst({
            where: {
                id,
            },
        });
        return weekDayExists;
    }
    async delete(id) {
        await weekDay.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, name }) {
        const updatedWeekDay = await weekDay.update({
            where: {
                id,
            },
            data: {
                name,
            },
        });
        return updatedWeekDay;
    }
}
exports.default = new WeekDaysRepository();
