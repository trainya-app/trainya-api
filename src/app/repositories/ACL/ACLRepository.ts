import { PrismaClient } from '@prisma/client';
const { memberRole } = new PrismaClient();
const { memberPermision } = new PrismaClient();

interface IMemberRole {
  member_id: number;
  authRole_id: number;
}

interface IMemberPermission {
  member_id: number;
  permission_id: number;
}

class ACLRepository {
  async findMemberRoles() {
    return await memberRole.findMany();
  }

  async findMemberPermissions() {
    return await memberPermision.findMany();
  }

  async createMemberRole({ member_id, authRole_id }: IMemberRole) {
    const createdMemberRole = await memberRole.create({
      data: {
        member_id,
        authRole_id,
      },
    });

    return createdMemberRole;
  }

  async createMemberPermission({
    member_id,
    permission_id,
  }: IMemberPermission) {
    const createdMemberPermission = await memberPermision.create({
      data: {
        member_id,
        permission_id,
      },
    });

    return createdMemberPermission;
  }
}

export default new ACLRepository();
