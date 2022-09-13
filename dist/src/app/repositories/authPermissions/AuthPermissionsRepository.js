"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require(".prisma/client");
const { authPermission } = new client_1.PrismaClient();
class AuthPermissionsRepository {
    async findAll() {
        const authPermissions = await authPermission.findMany();
        return authPermissions;
    }
    async findByName(name) {
        const authPermissionExists = await authPermission.findFirst({
            where: { name },
        });
        return authPermissionExists;
    }
    async create({ name, description }) {
        const createdAuthPermission = await authPermission.create({
            data: { name, description },
        });
        return createdAuthPermission;
    }
    async findById(id) {
        const authPermissionExists = await authPermission.findFirst({
            where: { id },
        });
        return authPermissionExists;
    }
}
exports.default = new AuthPermissionsRepository();
