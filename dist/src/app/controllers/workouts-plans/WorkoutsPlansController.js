"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const EmployeesRepository_1 = __importDefault(require("../../repositories/employees/EmployeesRepository"));
const WorkoutsPlansRepository_1 = __importDefault(require("../../repositories/workouts-plans/WorkoutsPlansRepository"));
const WorkoutsPlansWorkoutsRepository_1 = __importDefault(require("../../repositories/workouts-plans/WorkoutsPlansWorkoutsRepository"));
class WorkoutsPlansController {
    async index(req, res) {
        const workoutPlans = await WorkoutsPlansRepository_1.default.findAll();
        res.send({ workoutPlans });
    }
    async store(req, res) {
        const { employeeId, goal, workoutPlanWorkouts } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([employeeId, goal]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram preenchidos',
                workoutPlan: null,
            });
        }
        const employeeExists = await EmployeesRepository_1.default.findById(employeeId);
        if (!employeeExists) {
            return res.status(400).json({
                message: 'Funcionário não encontrado',
                workoutPlan: null,
            });
        }
        const workoutPlan = await WorkoutsPlansRepository_1.default.create({
            employee_id: employeeId,
            goal,
            workoutPlanWorkouts,
        });
        return res
            .status(200)
            .json({ message: 'Plano de treino criado com sucesso', workoutPlan });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const workoutPlanExists = await WorkoutsPlansRepository_1.default.findById(parsedId);
        if (!workoutPlanExists) {
            return res.status(400).json({
                message: 'Plano de treino não encontrado',
                workoutPlan: null,
            });
        }
        // Delete all connections for this workout plan
        await WorkoutsPlansWorkoutsRepository_1.default.deleteByWorkoutPlanId(parsedId);
        await WorkoutsPlansRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const workoutPlanExists = await WorkoutsPlansRepository_1.default.findById(parsedId);
        if (!workoutPlanExists) {
            return res.status(400).json({
                message: 'Plano de treino não encontrado',
                workoutPlan: null,
            });
        }
        return res.status(200).json({
            message: 'Plano de treino encontrado',
            workoutPlan: workoutPlanExists,
        });
    }
    async update(req, res) {
        const { employeeId, goal } = req.body;
        const { id } = req.params;
        const parsedId = Number(id);
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([employeeId, goal]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram preenchidos',
                workoutPlan: null,
            });
        }
        const workoutPlanExists = await WorkoutsPlansRepository_1.default.findById(parsedId);
        if (!workoutPlanExists) {
            return res.status(400).json({
                message: 'Plano de treino não encontrado',
                workoutPlan: null,
            });
        }
        const employeeExists = await EmployeesRepository_1.default.findById(employeeId);
        if (!employeeExists) {
            return res.status(400).json({
                message: 'Funcionário não encontrado',
                workoutPlan: null,
            });
        }
        const employee_id = Number.isNaN(Number(employeeId))
            ? undefined
            : Number(employeeId);
        const updatedWorkoutPlan = await WorkoutsPlansRepository_1.default.update({
            id: parsedId,
            employee_id,
            goal,
        });
        return res.status(200).json({
            message: 'Plano de treino atualizado',
            workoutPlan: updatedWorkoutPlan,
        });
    }
}
exports.default = new WorkoutsPlansController();
