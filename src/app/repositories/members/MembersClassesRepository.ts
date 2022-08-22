import { PrismaClient } from '@prisma/client';
const { memberClass } = new PrismaClient();

interface IMemberClass {
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
}

export default new MembersClassesRepository();
