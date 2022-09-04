"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { classWeekDay } = new client_1.PrismaClient();
class DocumentsRepository {
    async findAll() {
        const documents = await classWeekDay.findMany();
        return documents;
    }
    async create({ week_day_id, class_id }) {
        const createdClassWeekDay = await classWeekDay.create({
            data: {
                week_day_id,
                class_id,
            },
        });
        return createdClassWeekDay;
    }
    async findById(id) {
        const classWeekDayExists = await classWeekDay.findFirst({
            where: {
                id,
            },
        });
        return classWeekDayExists;
    }
    async delete(id) {
        await classWeekDay.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, week_day_id, class_id }) {
        const updatedClassWeekDay = await classWeekDay.update({
            where: {
                id,
            },
            data: {
                week_day_id,
                class_id,
            },
        });
        return updatedClassWeekDay;
    }
}
exports.default = new DocumentsRepository();
