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
    return await memberRole.findMany({
      select: {
        member_id: true,
        authRole_id: true,
        id: true,
        authRole: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findMemberPermissions() {
    return await memberPermision.findMany({
      select: {
        member_id: true,
        permission_id: true,
        id: true,
        permission: {
          select: {
            name: true,
          },
        },
      },
    });
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

  async findMemberPermissionByMemberId(member_id: number) {
    const memberPermissions = await memberPermision.findMany({
      where: { member_id },
      select: {
        permission_id: false,
        member_id: false,
        permission: {
          select: {
            name: true,
          },
        },
      },
    });

    return memberPermissions;
  }

  async findMemberRoleByMemberId(member_id: number) {
    const memberRoles = await memberRole.findMany({
      where: { member_id },
      select: {
        authRole_id: false,
        member_id: false,
        authRole: {
          select: {
            name: true,
          },
        },
      },
    });

    return memberRoles;
  }
}

export default new ACLRepository();
