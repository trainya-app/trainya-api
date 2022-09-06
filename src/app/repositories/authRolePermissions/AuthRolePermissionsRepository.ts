import { PrismaClient } from '@prisma/client';
const { authRolePermision } = new PrismaClient();

interface IAuthRolePermission {
  authRole_id: number;
  permission_id: number;
}

class AuthRolePermissionRepository {
  async findAll() {
    return await authRolePermision.findMany();
  }

  async create({ authRole_id, permission_id }: IAuthRolePermission) {
    const createdAuthRolePermission = await authRolePermision.create({
      data: {
        authRole_id,
        permission_id,
      },
    });

    return createdAuthRolePermission;
  }
}

export default new AuthRolePermissionRepository();
