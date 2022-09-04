import { PrismaClient } from '@prisma/client';
const { role } = new PrismaClient();

interface IRole {
  id: number;
  title: string;
  access_level: string;
}

class RolesRepository {
  async findAll() {
    const roles = await role.findMany();

    return roles;
  }

  async findByTitle({ title }: { title: string }) {
    const roleExists = role.findFirst({
      select: {
        title: true,
      },
      where: {
        title,
      },
    });
    return roleExists;
  }

  async create({ title, access_level }: Omit<IRole, 'id'>) {
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

  async findById(id: number) {
    const roleExists = await role.findFirst({
      where: {
        id,
      },
    });
    return roleExists;
  }

  async delete(id: number) {
    await role.delete({
      where: {
        id,
      },
    });
    return true;
  }

  async update({ title, access_level, id }: IRole) {
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

export default new RolesRepository();
