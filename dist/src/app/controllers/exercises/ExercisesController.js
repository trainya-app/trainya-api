"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const ExercisesRepository_1 = __importDefault(require("../../repositories/exercises/ExercisesRepository"));
const WorkoutsExercisesRepository_1 = __importDefault(require("../../repositories/workouts/WorkoutsExercisesRepository"));
class ExercisesController {
    async index(req, res) {
        const exercises = await ExercisesRepository_1.default.findAll();
        return res.send({ exercises });
    }
    async store(req, res) {
        const { name, comment, video_url } = req.body;
        const needsEquipment = false;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([name, comment]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                exercise: null,
            });
        }
        const nameExists = await ExercisesRepository_1.default.findByName(name);
        if (nameExists) {
            return res.status(400).json({
                message: 'Exercício já cadastrado',
                exercise: null,
            });
        }
        const exercise = await ExercisesRepository_1.default.store({
            name,
            comment,
            needs_equipment: needsEquipment,
            video_url,
        });
        return res.status(200).json({ message: 'Exercício cadastrado!', exercise });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const exercise = await ExercisesRepository_1.default.findById(parsedId);
        if (!exercise) {
            return res.status(400).json({
                message: 'Exercício não encontrado',
                exercise: null,
            });
        }
        // Delete all connections with workouts
        await WorkoutsExercisesRepository_1.default.deleteByExerciseId(parsedId);
        await ExercisesRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const exerciseExists = await ExercisesRepository_1.default.findById(parsedId);
        if (!exerciseExists) {
            return res.status(400).json({
                message: 'Exercício não encontrado',
                exercise: null,
            });
        }
        return res.status(200).send({ exercise: exerciseExists });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { name, comment, needsEquipment, videoUrl } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([name, comment, needsEquipment, videoUrl]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                exercise: null,
            });
        }
        const exerciseExists = await ExercisesRepository_1.default.findById(parsedId);
        if (!exerciseExists) {
            return res.status(400).json({
                message: 'Exercício não encontrado',
                exercise: null,
            });
        }
        const nameExists = await ExercisesRepository_1.default.findByName(name);
        if (nameExists) {
            let id = nameExists.id;
            if (id !== parsedId) {
                return res.status(400).json({
                    message: 'Exercício já cadastrado',
                    exercise: null,
                });
            }
            const updatedExercise = await ExercisesRepository_1.default.update({
                id: parsedId,
                name,
                comment,
                needs_equipment: needsEquipment,
                video_url: videoUrl
            });
            return res
                .status(200)
                .json({ message: 'Exercício atualizado!', exercise: updatedExercise });
        }
    }
}
exports.default = new ExercisesController();
