import { PrismaClient } from '@prisma/client';
const { authRolePermision } = new PrismaClient();

class AuthRolePermissionRepository {
  async findAll() {
    return await authRolePermision.findMany();
  }
}

export default new AuthRolePermissionRepository();
