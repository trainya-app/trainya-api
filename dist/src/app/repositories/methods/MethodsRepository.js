"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { method } = new client_1.PrismaClient();
class MethodsRepository {
    async findAll() {
        const methods = await method.findMany();
        return methods;
    }
    async findByName({ name }) {
        const methodExists = await method.findFirst({
            where: {
                name,
            },
        });
        return methodExists;
    }
    async create({ name }) {
        const createdMethod = await method.create({
            data: {
                name,
            },
        });
        return createdMethod;
    }
    async findById(id) {
        const methodExists = await method.findFirst({
            where: {
                id,
            },
        });
        return methodExists;
    }
    async delete(id) {
        await method.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, name }) {
        const updatedMethod = await method.update({
            where: {
                id,
            },
            data: {
                name,
            },
        });
        return updatedMethod;
    }
}
exports.default = new MethodsRepository();
