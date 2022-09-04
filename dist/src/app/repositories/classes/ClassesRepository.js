"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ClassesRepository {
    async findAll() {
        const classes = await prisma.class.findMany();
        return classes;
    }
    async findByTitle(title) {
        const titleExists = await prisma.class.findFirst({
            where: { title },
        });
        return titleExists;
    }
    async create({ gym_id, title, description }) {
        const createdClass = await prisma.class.create({
            data: {
                gym_id,
                title,
                description,
            },
        });
        return createdClass;
    }
    async findById(id) {
        const classExists = await prisma.class.findFirst({
            where: { id },
        });
        return classExists;
    }
    async delete(id) {
        await prisma.class.delete({
            where: { id },
        });
        return true;
    }
    async update({ id, gym_id, title, description }) {
        const updatedClass = await prisma.class.update({
            where: { id },
            data: {
                title,
                gym_id,
                description,
            },
        });
        return updatedClass;
    }
}
exports.default = new ClassesRepository();
