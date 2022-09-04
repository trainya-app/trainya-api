"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const GymsRepository_1 = __importDefault(require("../../repositories/gyms/GymsRepository"));
const MembersPaymentsRepository_1 = __importDefault(require("../../repositories/members/MembersPaymentsRepository"));
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
const MethodsRepository_1 = __importDefault(require("../../repositories/methods/MethodsRepository"));
class MembersPaymentsController {
    async index(req, res) {
        const memberPayments = await MembersPaymentsRepository_1.default.findAll();
        return res.send({ memberPayments });
    }
    async store(req, res) {
        const { memberId, methodId, gymId, price, dueDate, paymentDate } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            memberId,
            methodId,
            gymId,
            price,
            dueDate,
            paymentDate,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram enviados',
                memberPayment: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res.status(400).send({
                message: 'Membro não encontrado',
                memberPayment: null,
            });
        }
        const methodExists = await MethodsRepository_1.default.findById(methodId);
        if (!methodExists) {
            return res.status(400).send({
                message: 'Método não encontrado',
                memberPayment: null,
            });
        }
        const gymExists = await GymsRepository_1.default.findById(gymId);
        if (!gymExists) {
            return res.status(400).send({
                message: 'Academia não encontrada',
                memberPayment: null,
            });
        }
        const memberPayment = await MembersPaymentsRepository_1.default.store({
            member_id: memberId,
            method_id: methodId,
            gym_id: gymId,
            price,
            due_date: dueDate,
            payment_date: paymentDate,
        });
        return res
            .status(200)
            .json({ message: 'Pagamento do membro criado', memberPayment });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberPaymentExists = await MembersPaymentsRepository_1.default.findById(parsedId);
        if (!memberPaymentExists) {
            return res.status(400).send({
                message: 'Pagamento do membro não encontrado',
                memberPayment: null,
            });
        }
        await MembersPaymentsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberPaymentExists = await MembersPaymentsRepository_1.default.findById(parsedId);
        if (!memberPaymentExists) {
            return res.status(400).send({
                message: 'Pagamento do membro não encontrado',
                memberPayment: null,
            });
        }
        return res.send({ memberPayment: memberPaymentExists });
    }
}
exports.default = new MembersPaymentsController();
