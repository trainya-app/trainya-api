"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const EmployeesRepository_1 = __importDefault(require("../../repositories/employees/EmployeesRepository"));
const WorkoutsRepository_1 = __importDefault(require("../../repositories/workouts/WorkoutsRepository"));
class WorkoutsController {
    async index(req, res) {
        const workouts = await WorkoutsRepository_1.default.findAll();
        res.send({ workouts });
    }
    async store(req, res) {
        const { employeeId, title, description, type, previewImageUrl, videoUrl, level, duration, } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            employeeId,
            title,
            description,
            type,
            previewImageUrl,
            videoUrl,
            level,
            duration,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram preenchidos',
                workout: null,
            });
        }
        const employeeExists = await EmployeesRepository_1.default.findById(employeeId);
        if (!employeeExists) {
            return res.status(400).json({
                message: 'Funcionário não encontrado',
                workout: null,
            });
        }
        const titleExists = await WorkoutsRepository_1.default.findByTitle(title);
        if (titleExists) {
            return res.status(400).json({
                message: 'Este treino já existe',
                workout: null,
            });
        }
        const workout = await WorkoutsRepository_1.default.create({
            employee_id: employeeId,
            title,
            description,
            type,
            preview_image_url: previewImageUrl,
            video_url: videoUrl,
            level,
            duration,
        });
        res.status(200).json({ message: 'Treino criado', workout });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const workoutExists = await WorkoutsRepository_1.default.findById(parsedId);
        if (!workoutExists) {
            return res.status(400).json({
                message: 'Treino não encontrado',
                workout: null,
            });
        }
        await WorkoutsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const workoutExists = await WorkoutsRepository_1.default.findById(parsedId);
        if (!workoutExists) {
            return res.status(400).json({
                message: 'Treino não encontrado',
                workout: null,
            });
        }
        res.status(200).send({ workout: workoutExists });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { employeeId, title, description, type, previewImageUrl, videoUrl, level, duration, } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            employeeId,
            title,
            description,
            type,
            previewImageUrl,
            videoUrl,
            level,
            duration,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram preenchidos',
                workout: null,
            });
        }
        const employeeExists = await EmployeesRepository_1.default.findById(employeeId);
        if (!employeeExists) {
            return res.status(400).json({
                message: 'Funcionário não encontrado',
                workout: null,
            });
        }
        const workoutExists = await WorkoutsRepository_1.default.findById(parsedId);
        if (!workoutExists) {
            return res.status(400).json({
                message: 'Treino não encontrado',
                workout: null,
            });
        }
        const titleExists = await WorkoutsRepository_1.default.findByTitle(title);
        if (titleExists) {
            let id = titleExists.id;
            if (id !== parsedId) {
                return res.status(400).json({
                    message: 'Este treino já existe',
                    workout: null,
                });
            }
        }
        const employee_id = Number.isNaN(Number(employeeId))
            ? undefined
            : Number(employeeId);
        const workout = await WorkoutsRepository_1.default.update({
            id: parsedId,
            employee_id,
            title,
            description,
            type,
            preview_image_url: previewImageUrl,
            video_url: videoUrl,
            level,
            duration,
        });
        res.status(200).json({ message: 'Treino atualizado', workout });
    }
}
exports.default = new WorkoutsController();
