import { PrismaClient } from '.prisma/client';
const { authPermission } = new PrismaClient();

class AuthPermissionsRepository {
  async findAll() {
    const authPermissions = await authPermission.findMany();
    return authPermissions;
  }
}

export default new AuthPermissionsRepository();
