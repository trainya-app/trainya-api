import { PrismaClient } from '@prisma/client';
import gymMembersRoutes from '../../../routes/GymMembers.routes';
const { gymMember } = new PrismaClient();

interface IGymMember {
  gym_id: number;
  member_id: number;
}

interface IUpdateGymMember {
  gym_id?: number;
  member_id?: number;
}

class GymsMembersRepository {
  async findAll({ gymId }: { gymId: number }) {
    const gymMembers = await gymMember.findMany({
      select: {
        id: true,
        gym: {
          select: {
            name: true,
          },
        },
        member_id: true,
        member: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            at_gym: true,
            height: true,
            weight: true,
            memberDocument: {
              select: {
                document: {
                  select: {
                    name: true,
                  },
                },
                value: true,
              },
            },
          },
        },
      },
      where: {
        gym_id: gymId,
      },
    });

    return gymMembers;
  }

  async create({ gym_id, member_id }: IGymMember) {
    const createdGymMember = await gymMember.create({
      data: {
        gym_id,
        member_id,
      },
      select: {
        id: true,
        gym: {
          select: {
            name: true,
          },
        },
        member: {
          select: {
            name: true,
          },
        },
      },
    });

    return createdGymMember;
  }

  async findById(id: number) {
    const gymMemberExists = await gymMember.findFirst({
      where: {
        id,
      },
    });
    return gymMemberExists;
  }

  async delete(id: number) {
    await gymMember.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async update(id: number, { gym_id, member_id }: IUpdateGymMember) {
    const updatedGymMember = await gymMember.update({
      where: {
        id,
      },
      data: {
        gym_id,
        member_id,
      },
    });

    return updatedGymMember;
  }

  async findByMember(member_id: number) {
    const gymMemberExists = await gymMember.findFirst({
      where: {
        member_id,
      },
      select: {
        id: true,
        gym_id: true,
        gym: {
          select: {
            name: true,
            current_capacity: true,
          },
        },
      },
    });
    return gymMemberExists;
  }

  async getMembersAtGym({ gym_id }: { gym_id: number }) {
    const members = await gymMember.count({
      where: {
        AND: {
          gym_id,
          member: {
            at_gym: true,
          },
        },
      },
    });
    return members;
  }

  async verifyMember({ gym_id, user_id }: { gym_id: number; user_id: number }) {
    const member = await gymMember.findFirst({
      where: {
        AND: {
          gym_id,
          member_id: user_id,
        },
      },
    });
    return member;
  }
}

export default new GymsMembersRepository();
