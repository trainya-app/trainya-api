import { PrismaClient } from '@prisma/client';
const { member } = new PrismaClient();

class MembersRepository {
  async findAll() {
    const members = await member.findMany();

    return members;
  }
}

export default new MembersRepository();
