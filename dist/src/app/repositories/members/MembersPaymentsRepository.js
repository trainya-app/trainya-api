"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { memberPayment } = new client_1.PrismaClient();
class MembersPaymentsRepository {
    async findAll() {
        const memberPayments = await memberPayment.findMany();
        return memberPayments;
    }
    async store({ member_id, method_id, gym_id, price, due_date, payment_date, }) {
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
    async delete(id) {
        await memberPayment.delete({
            where: { id },
        });
        return true;
    }
    async findById(id) {
        const memberPaymentExists = await memberPayment.findFirst({
            where: { id },
        });
        return memberPaymentExists;
    }
}
exports.default = new MembersPaymentsRepository();
