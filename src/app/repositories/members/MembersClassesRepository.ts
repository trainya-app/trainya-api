import { PrismaClient } from '@prisma/client';
const { memberClass } = new PrismaClient();

interface IMemberClass {
  member_id: number;
  class_id: number;
}

interface IUpdateMemberClass {
  id: number;
  member_id: number;
  class_id: number;
}

class MembersClassesRepository {
  async findAll() {
    const memberClasses = await memberClass.findMany();
    return memberClasses;
  }

  async create({ member_id, class_id }: IMemberClass) {
    const createdMemberClass = await memberClass.create({
      data: {
        member_id,
        class_id,
      },
    });
    return createdMemberClass;
  }

  async findById(id: number) {
    const memberClassExists = await memberClass.findFirst({
      where: {
        id,
      },
    });
    return memberClassExists;
  }

  async delete(id: number) {
    await memberClass.delete({
      where: {
        id,
      },
    });
    return true;
  }

  async update({ id, member_id, class_id }: IUpdateMemberClass) {
    const updatedMemberClass = await memberClass.update({
      where: {
        id,
      },
      data: {
        member_id,
        class_id,
      },
    });
    return updatedMemberClass;
  }

  async findByMember(member_id: number) {
    return await memberClass.findMany({
      where: {
        member_id,
      },
      select: {
        class: {
          select: {
            title: true,
            min_members: true,
            max_members: true,

            hour: true,
            classWeekDay: {
              select: {
                weekDay: {
                  select: {
                    name: true,
                  },
                },
              },
            },
            employeeClass: {
              select: {
                employee: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
        member_id: true,
      },
    });
  }
}

export default new MembersClassesRepository();
