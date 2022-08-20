import { PrismaClient } from '@prisma/client';
const { memberPayment } = new PrismaClient();

class MembersPaymentsRepository {
  async findAll() {
    const memberPayments = await memberPayment.findMany();
    return memberPayments;
  }
}

export default new MembersPaymentsRepository();
