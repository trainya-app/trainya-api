import { PrismaClient } from '@prisma/client';
const { gymMember } = new PrismaClient();

interface IGymMember {
  gym_id: number;
  member_id: number;
}

class GymsMembersRepository {
  async findAll() {
    const gymMembers = await gymMember.findMany();

    return gymMembers;
  }

  async create({ gym_id, member_id }: IGymMember) {
    const createdGymMember = await gymMember.create({
      data: {
        gym_id,
        member_id,
      },
    });

    return createdGymMember;
  }
}

export default new GymsMembersRepository();
