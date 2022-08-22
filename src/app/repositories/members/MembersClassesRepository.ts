import { PrismaClient } from '@prisma/client';
const { memberClass } = new PrismaClient();
class MembersClassesRepository {
  async findAll() {
    const memberClasses = await memberClass.findMany();
    return memberClasses;
  }
}

export default new MembersClassesRepository();
