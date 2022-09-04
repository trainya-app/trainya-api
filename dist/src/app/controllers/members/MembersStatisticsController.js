"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
const MembersStatisticsRepository_1 = __importDefault(require("../../repositories/members/MembersStatisticsRepository"));
const StatisticsRepository_1 = __importDefault(require("../../repositories/statistics/StatisticsRepository"));
class MembersStatisticsController {
    async index(req, res) {
        const memberStatiscs = await MembersStatisticsRepository_1.default.findAll();
        return res.send({ memberStatiscs });
    }
    async store(req, res) {
        const { memberId, statisticId, value } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([memberId, statisticId, value]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                memberStatistic: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res
                .status(400)
                .json({ message: 'Membro não encontrado', memberStatistic: null });
        }
        const statisticExists = await StatisticsRepository_1.default.findById(statisticId);
        if (!statisticExists) {
            return res
                .status(400)
                .json({ message: 'Estátistica não encontrada', memberStatistic: null });
        }
        const createdMemberStatistic = await MembersStatisticsRepository_1.default.create({
            member_id: memberId,
            statistic_id: statisticId,
            value,
        });
        return res.status(200).json({
            message: 'Estátistica do membro criada',
            memberStatistic: createdMemberStatistic,
        });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberStatisticExists = await MembersStatisticsRepository_1.default.findById(parsedId);
        if (!memberStatisticExists) {
            return res.status(400).json({
                message: 'Estátistica do membro não existe',
                memberStatistic: null,
            });
        }
        await MembersStatisticsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberStatisticExists = await MembersStatisticsRepository_1.default.findById(parsedId);
        if (!memberStatisticExists) {
            return res.status(400).json({
                message: 'Estátistica do membro não existe',
                memberStatistic: null,
            });
        }
        return res.status(200).json({
            message: 'Estátistica do membro encontrada',
            memberStatistic: memberStatisticExists,
        });
    }
    async update(req, res) {
        const { id } = req.params;
        const { memberId, statisticId, value } = req.body;
        const parsedId = Number(id);
        const memberStatisticExists = await MembersStatisticsRepository_1.default.findById(parsedId);
        if (!memberStatisticExists) {
            return res.status(400).json({
                message: 'Estátistica do membro não existe',
                memberStatistic: null,
            });
        }
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([memberId, statisticId, value]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                memberStatistic: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res
                .status(400)
                .json({ message: 'Membro não encontrado', memberStatistic: null });
        }
        const statisticExists = await StatisticsRepository_1.default.findById(statisticId);
        if (!statisticExists) {
            return res
                .status(400)
                .json({ message: 'Estátistica não encontrada', memberStatistic: null });
        }
        const member_id = Number.isNaN(Number(memberId))
            ? undefined
            : Number(memberId);
        const statistic_id = Number.isNaN(Number(statisticId))
            ? undefined
            : Number(statisticId);
        const updatedMemberStatistic = await MembersStatisticsRepository_1.default.update({
            id: parsedId,
            member_id,
            statistic_id,
            value,
        });
        return res.status(200).json({
            message: 'Estátistica do membro atualizada',
            memberStatistic: updatedMemberStatistic,
        });
    }
}
exports.default = new MembersStatisticsController();
