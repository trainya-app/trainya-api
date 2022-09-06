import { PrismaClient } from '@prisma/client';
const { authRole } = new PrismaClient();

interface IAuthRole {
  name: string;
  description: string;
}

class AuthRoleRepository {
  async findAll() {
    const authRoles = await authRole.findMany();
    return authRoles;
  }

  async findByName(name: string) {
    const authRoleExists = await authRole.findFirst({
      where: {
        name,
      },
    });
    return authRoleExists;
  }

  async create({ name, description }: IAuthRole) {
    const createdAuthRole = await authRole.create({
      data: {
        name,
        description,
      },
    });

    return createdAuthRole;
  }

  async findById(id: number) {
    const authRoleExists = await authRole.findFirst({
      where: {
        id,
      },
    });
    return authRoleExists;
  }
}

export default new AuthRoleRepository();
