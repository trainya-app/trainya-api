import { PrismaClient } from '@prisma/client';
const { gymMember } = new PrismaClient();

class GymsMembersRepository {
  async findAll() {
    const gymMembers = await gymMember.findMany();

    return gymMembers;
  }
}

export default new GymsMembersRepository();
