import { PrismaClient } from '@prisma/client';
const { memberPayment } = new PrismaClient();

interface IMemberPayment {
  member_id: number;
  method_id: number;
  gym_id: number;
  price: number;
  due_date: string;
  payment_date: string;
}

class MembersPaymentsRepository {
  async findAll() {
    const memberPayments = await memberPayment.findMany();
    return memberPayments;
  }

  async store({
    member_id,
    method_id,
    gym_id,
    price,
    due_date,
    payment_date,
  }: IMemberPayment) {
    const createdMemberPayment = await memberPayment.create({
      data: {
        member_id,
        method_id,
        gym_id,
        price,
        due_date,
        payment_date,
      },
    });
    return createdMemberPayment;
  }

  async delete(id: number) {
    await memberPayment.delete({
      where: { id },
    });
    return true;
  }

  async findById(id: number) {
    const memberPaymentExists = await memberPayment.findFirst({
      where: { id },
    });
    return memberPaymentExists;
  }
}

export default new MembersPaymentsRepository();
