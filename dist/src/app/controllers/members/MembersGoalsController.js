"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const GoalsRepository_1 = __importDefault(require("../../repositories/goals/GoalsRepository"));
const MembersGoalsRepository_1 = __importDefault(require("../../repositories/members/MembersGoalsRepository"));
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
class MembersGoalsController {
    async index(req, res) {
        const memberGoals = await MembersGoalsRepository_1.default.findAll();
        return res.send({ memberGoals });
    }
    async store(req, res) {
        const { memberId, goalId, desiredProgress, currentProgress, startedAt, finishAt, finishedAt, } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            memberId,
            goalId,
            desiredProgress,
            currentProgress,
            startedAt,
            finishAt,
            finishedAt,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram preenchidos',
                memberGoal: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res.status(400).json({
                message: 'Membro não encontrado',
                memberGoal: null,
            });
        }
        const goalExists = await GoalsRepository_1.default.findById(goalId);
        if (!goalExists) {
            return res.status(400).json({
                message: 'Meta não encontrado',
                memberGoal: null,
            });
        }
        const memberGoal = await MembersGoalsRepository_1.default.store({
            member_id: memberId,
            goal_id: goalId,
            desired_progress: desiredProgress,
            current_progress: currentProgress,
            started_at: startedAt,
            finish_at: finishAt,
            finished_at: finishedAt,
        });
        return res
            .status(200)
            .send({ message: 'Meta do membro criada', memberGoal });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberGoalExists = await MembersGoalsRepository_1.default.findById(parsedId);
        if (!memberGoalExists) {
            return res.status(400).json({
                message: 'Meta do membro não encontrada',
                memberGoal: null,
            });
        }
        await MembersGoalsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberGoalExists = await MembersGoalsRepository_1.default.findById(parsedId);
        if (!memberGoalExists) {
            return res.status(400).json({
                message: 'Meta do membro não encontrada',
                memberGoal: null,
            });
        }
        return res.status(200).json({
            message: 'Meta do membro encontrada',
            memberGoal: memberGoalExists,
        });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { memberId, goalId, desiredProgress, currentProgress, startedAt, finishAt, finishedAt, } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            memberId,
            goalId,
            desiredProgress,
            currentProgress,
            startedAt,
            finishAt,
            finishedAt,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram preenchidos',
                memberGoal: null,
            });
        }
        const memberGoalExists = await MembersGoalsRepository_1.default.findById(parsedId);
        if (!memberGoalExists) {
            return res.status(400).json({
                message: 'Meta do membro não encontrada',
                memberGoal: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res.status(400).json({
                message: 'Membro não encontrado',
                memberGoal: null,
            });
        }
        const goalExists = await GoalsRepository_1.default.findById(goalId);
        if (!goalExists) {
            return res.status(400).json({
                message: 'Meta não encontrado',
                memberGoal: null,
            });
        }
        const member_id = Number.isNaN(Number(memberId))
            ? undefined
            : Number(memberId);
        const goal_id = Number.isNaN(Number(goalId)) ? undefined : Number(goalId);
        const desired_progress = Number.isNaN(Number(desiredProgress))
            ? undefined
            : Number(desiredProgress);
        const current_progress = Number.isNaN(Number(currentProgress))
            ? undefined
            : Number(currentProgress);
        const memberGoal = await MembersGoalsRepository_1.default.update({
            id: parsedId,
            member_id,
            goal_id,
            desired_progress,
            current_progress,
            started_at: startedAt,
            finish_at: finishAt,
            finished_at: finishedAt,
        });
        return res
            .status(200)
            .json({ message: 'Meta do membro atualizada', memberGoal });
    }
}
exports.default = new MembersGoalsController();
