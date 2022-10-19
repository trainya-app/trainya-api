"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
const MembersWorkoutsPlansRepository_1 = __importDefault(require("../../repositories/members/MembersWorkoutsPlansRepository"));
const WorkoutsPlansRepository_1 = __importDefault(require("../../repositories/workouts-plans/WorkoutsPlansRepository"));
const dayjs_1 = __importDefault(require("dayjs"));
class MembersWorkoutsPlansController {
    async index(req, res) {
        const memberWorkoutPlans = await MembersWorkoutsPlansRepository_1.default.findAll();
        return res.send({ memberWorkoutPlans });
    }
    async store(req, res) {
        const { memberId, workoutPlanId, startedAt, finishedAt } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([memberId, workoutPlanId]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                memberWorkoutPlan: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res
                .status(400)
                .json({ message: 'Membro não encontrado', memberWorkoutPlan: null });
        }
        const workoutPlanExists = await WorkoutsPlansRepository_1.default.findById(workoutPlanId);
        if (!workoutPlanExists) {
            return res.status(400).json({
                message: 'Plano de treino não encontrado',
                memberWorkoutPlan: null,
            });
        }
        const memberAlreadyIsInWorkoutPlan = await MembersWorkoutsPlansRepository_1.default.findByMemberIdAndWorkoutPlanId({
            memberId: Number(memberId),
            workoutPlanId: Number(workoutPlanId),
        });
        if (memberAlreadyIsInWorkoutPlan) {
            return res
                .status(400)
                .json({ message: 'Este membro já está nesse plano de treino.' });
        }
        const finishAt = (0, dayjs_1.default)().add(30, 'day').toISOString();
        const memberWorkoutPlan = await MembersWorkoutsPlansRepository_1.default.create({
            member_id: memberId,
            workouts_plan_id: workoutPlanId,
            started_at: startedAt,
            finish_at: finishAt,
            finished_at: finishedAt,
        });
        return res.status(200).send({
            message: 'Plano de treino do membro criado',
            memberWorkoutPlan,
        });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberWorkoutPlanExists = await MembersWorkoutsPlansRepository_1.default.findById(parsedId);
        if (!memberWorkoutPlanExists) {
            return res.status(400).json({
                message: 'Plano de treino do membro não encontrado',
                memberWorkoutPlan: null,
            });
        }
        await MembersWorkoutsPlansRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberWorkoutPlanExists = await MembersWorkoutsPlansRepository_1.default.findById(parsedId);
        if (!memberWorkoutPlanExists) {
            return res.status(400).json({
                message: 'Plano de treino do membro não encontrado',
                memberWorkoutPlan: null,
            });
        }
        return res.status(200).json({
            message: 'Plano de treino do membro encontrado',
            memberWorkoutPlan: memberWorkoutPlanExists,
        });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { memberId, workoutPlanId, startedAt, finishAt, finishedAt } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            memberId,
            workoutPlanId,
            startedAt,
            finishAt,
            finishedAt,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                memberWorkoutPlan: null,
            });
        }
        const memberWorkoutPlanExists = await MembersWorkoutsPlansRepository_1.default.findById(parsedId);
        if (!memberWorkoutPlanExists) {
            return res.status(400).json({
                message: 'Plano de treino do membro não encontrado',
                memberWorkoutPlan: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res
                .status(400)
                .json({ message: 'Membro não encontrado', memberWorkoutPlan: null });
        }
        const workoutPlanExists = await WorkoutsPlansRepository_1.default.findById(workoutPlanId);
        if (!workoutPlanExists) {
            return res.status(400).json({
                message: 'Plano de treino não encontrado',
                memberWorkoutPlan: null,
            });
        }
        const member_id = Number.isNaN(Number(memberId))
            ? undefined
            : Number(memberId);
        const workouts_plan_id = Number.isNaN(Number(workoutPlanId))
            ? undefined
            : Number(workoutPlanId);
        const updatedMemberWorkoutPlan = await MembersWorkoutsPlansRepository_1.default.update({
            id: parsedId,
            member_id,
            workouts_plan_id,
            started_at: startedAt,
            finish_at: finishAt,
            finished_at: finishedAt,
        });
        return res.status(200).json({
            message: 'Plano de treino do membro atualizado',
            memberWorkoutPlan: updatedMemberWorkoutPlan,
        });
    }
}
exports.default = new MembersWorkoutsPlansController();
