"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { role } = new client_1.PrismaClient();
class RolesRepository {
    async findAll() {
        const roles = await role.findMany({
            select: {
                id: true,
                title: true,
                access_level: true,
            },
        });
        return roles;
    }
    async findByTitle({ title }) {
        const roleExists = role.findFirst({
            select: {
                title: true,
                id: true,
            },
            where: {
                title,
            },
        });
        return roleExists;
    }
    async create({ title, access_level }) {
        const createdRole = await role.create({
            data: {
                title,
                access_level,
            },
            select: {
                title: true,
                access_level: true,
            },
        });
        return createdRole;
    }
    async findById(id) {
        const roleExists = await role.findFirst({
            where: {
                id,
            },
        });
        return roleExists;
    }
    async delete(id) {
        await role.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ title, access_level, id }) {
        const updatedRole = await role.update({
            where: {
                id,
            },
            data: {
                title,
                access_level,
            },
        });
        return updatedRole;
    }
}
exports.default = new RolesRepository();
