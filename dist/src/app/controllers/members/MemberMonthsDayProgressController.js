"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MemberMonthsDayProgressRepository_1 = __importDefault(require("../../repositories/members/MemberMonthsDayProgressRepository"));
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
class MemberMonthsDayProgressController {
    async index(req, res) {
        const memberMonthsDayProgresses = await MemberMonthsDayProgressRepository_1.default.findAll();
        return res.send({ memberMonthsDayProgresses });
    }
    async store(req, res) {
        const { memberId, monthId } = req.body;
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res
                .status(404)
                .json({ message: 'Membro não encontrado', member: null });
        }
        const createdMemberMonthsDayProgresses = await MemberMonthsDayProgressRepository_1.default.create({
            member_id: memberId,
            month_id: monthId,
        });
        return res.status(200).json({
            message: ' Progresso de dias do mês do membro criado ',
            createdMemberMonthsDayProgresses,
        });
    }
    async deleteAllByMember(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberExists = await MembersRepository_1.default.findById(parsedId);
        if (!memberExists) {
            return res
                .status(404)
                .json({ message: 'Membro não encontrado', member: null });
        }
        await MemberMonthsDayProgressRepository_1.default.deleteAllByMember(parsedId);
        return res.sendStatus(200);
    }
    async showByMember(req, res) {
        const member_id = req.userId;
        const memberExists = await MembersRepository_1.default.findById(member_id);
        if (!memberExists) {
            return res
                .status(404)
                .json({ message: 'Membro não encontrado', member: null });
        }
        const memberMonthsDayProgresses = await MemberMonthsDayProgressRepository_1.default.findByMemberId(member_id);
        return res.status(200).json({
            message: ' Progressos de dias dos meses do membro encontrados ',
            memberMonthsDayProgresses,
        });
    }
}
exports.default = new MemberMonthsDayProgressController();
