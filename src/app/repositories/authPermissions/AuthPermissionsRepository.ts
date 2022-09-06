import { PrismaClient } from '.prisma/client';
const { authPermission } = new PrismaClient();

interface IAuthPermission {
  name: string;
  description: string;
}

class AuthPermissionsRepository {
  async findAll() {
    const authPermissions = await authPermission.findMany();
    return authPermissions;
  }

  async findByName(name: string) {
    const authPermissionExists = await authPermission.findFirst({
      where: { name },
    });
    return authPermissionExists;
  }

  async create({ name, description }: IAuthPermission) {
    const createdAuthPermission = await authPermission.create({
      data: { name, description },
    });
    return createdAuthPermission;
  }

  async findById(id: number) {
    const authPermissionExists = await authPermission.findFirst({
      where: { id },
    });
    return authPermissionExists;
  }
}

export default new AuthPermissionsRepository();
