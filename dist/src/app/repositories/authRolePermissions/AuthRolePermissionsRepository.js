"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { authRolePermision } = new client_1.PrismaClient();
class AuthRolePermissionRepository {
    async findAll() {
        return await authRolePermision.findMany();
    }
    async create({ authRole_id, permission_id }) {
        const createdAuthRolePermission = await authRolePermision.create({
            data: {
                authRole_id,
                permission_id,
            },
        });
        return createdAuthRolePermission;
    }
}
exports.default = new AuthRolePermissionRepository();
