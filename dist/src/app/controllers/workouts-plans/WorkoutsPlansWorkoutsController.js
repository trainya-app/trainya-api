"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const WorkoutsPlansRepository_1 = __importDefault(require("../../repositories/workouts-plans/WorkoutsPlansRepository"));
const WorkoutsPlansWorkoutsRepository_1 = __importDefault(require("../../repositories/workouts-plans/WorkoutsPlansWorkoutsRepository"));
const WorkoutsRepository_1 = __importDefault(require("../../repositories/workouts/WorkoutsRepository"));
class WorkoutsPlansWorkoutsController {
    async index(req, res) {
        const workoutPlanWorkouts = await WorkoutsPlansWorkoutsRepository_1.default.findAll();
        res.send({ workoutPlanWorkouts });
    }
    async store(req, res) {
        const { workoutPlanId, workoutId } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([workoutPlanId, workoutId]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                workoutPlanWorkout: null,
            });
        }
        const workoutPlanExists = await WorkoutsPlansRepository_1.default.findById(workoutPlanId);
        if (!workoutPlanExists) {
            return res.status(400).json({
                message: 'Plano de treino não encontrado',
                workoutPlanWorkout: null,
            });
        }
        const workoutExists = await WorkoutsRepository_1.default.findById(workoutId);
        if (!workoutExists) {
            return res.status(400).json({
                message: 'Treino não encontrado',
                workoutPlanWorkout: null,
            });
        }
        const workoutPlanWorkout = await WorkoutsPlansWorkoutsRepository_1.default.create({
            workouts_plan_id: workoutPlanId,
            workout_id: workoutId,
        });
        res.status(200).send({
            message: 'Treino do plano de treino criado',
            workoutPlanWorkout,
        });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const workoutPlanWorkoutExists = await WorkoutsPlansWorkoutsRepository_1.default.findById(parsedId);
        if (!workoutPlanWorkoutExists) {
            return res.status(400).json({
                message: 'Treino do plano de treino não encontrado',
                workoutPlanWorkout: null,
            });
        }
        await WorkoutsPlansWorkoutsRepository_1.default.delete(parsedId);
        res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const workoutPlanWorkoutExists = await WorkoutsPlansWorkoutsRepository_1.default.findById(parsedId);
        if (!workoutPlanWorkoutExists) {
            return res.status(400).json({
                message: 'Treino do plano de treino não encontrado',
                workoutPlanWorkout: null,
            });
        }
        res.send({ workoutPlanWorkout: workoutPlanWorkoutExists });
    }
    async update(req, res) {
        const { workoutPlanId, workoutId } = req.body;
        const { id } = req.params;
        const parsedId = Number(id);
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([workoutPlanId, workoutId]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                workoutPlanWorkout: null,
            });
        }
        const workoutPlanWorkoutExists = await WorkoutsPlansWorkoutsRepository_1.default.findById(parsedId);
        if (!workoutPlanWorkoutExists) {
            return res.status(400).json({
                message: 'Treino do plano de treino não encontrado',
                workoutPlanWorkout: null,
            });
        }
        const workoutPlanExists = await WorkoutsPlansRepository_1.default.findById(workoutPlanId);
        if (!workoutPlanExists) {
            return res.status(400).json({
                message: 'Plano de treino não encontrado',
                workoutPlanWorkout: null,
            });
        }
        const workoutExists = await WorkoutsRepository_1.default.findById(workoutId);
        if (!workoutExists) {
            return res.status(400).json({
                message: 'Treino não encontrado',
                workoutPlanWorkout: null,
            });
        }
        const workout_id = Number.isNaN(Number(workoutId))
            ? undefined
            : Number(workoutId);
        const workouts_plan_id = Number.isNaN(Number(workoutPlanId))
            ? undefined
            : Number(workoutPlanId);
        const updatedWorkoutPlanWorkout = await WorkoutsPlansWorkoutsRepository_1.default.update({
            id: parsedId,
            workout_id,
            workouts_plan_id,
        });
        return res.status(200).json({
            message: 'Treino do plano de treino atualizado',
            workoutPlanWorkout: updatedWorkoutPlanWorkout,
        });
    }
}
exports.default = new WorkoutsPlansWorkoutsController();
