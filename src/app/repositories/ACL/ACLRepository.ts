import { PrismaClient } from '@prisma/client';
const { memberRole } = new PrismaClient();
const { memberPermision } = new PrismaClient();

class ACLRepository {
  async findMemberRoles() {
    return await memberRole.findMany();
  }

  async findMemberPermissions() {
    return await memberPermision.findMany();
  }
}

export default new ACLRepository();
