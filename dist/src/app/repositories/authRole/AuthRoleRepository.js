"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { authRole } = new client_1.PrismaClient();
class AuthRoleRepository {
    async findAll() {
        const authRoles = await authRole.findMany();
        return authRoles;
    }
    async findByName(name) {
        const authRoleExists = await authRole.findFirst({
            where: {
                name,
            },
        });
        return authRoleExists;
    }
    async create({ name, description }) {
        const createdAuthRole = await authRole.create({
            data: {
                name,
                description,
            },
        });
        return createdAuthRole;
    }
    async findById(id) {
        const authRoleExists = await authRole.findFirst({
            where: {
                id,
            },
        });
        return authRoleExists;
    }
}
exports.default = new AuthRoleRepository();
