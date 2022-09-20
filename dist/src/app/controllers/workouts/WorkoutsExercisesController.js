"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const ExercisesRepository_1 = __importDefault(require("../../repositories/exercises/ExercisesRepository"));
const WorkoutsExercisesRepository_1 = __importDefault(require("../../repositories/workouts/WorkoutsExercisesRepository"));
const WorkoutsRepository_1 = __importDefault(require("../../repositories/workouts/WorkoutsRepository"));
class WorkoutsExercisesController {
    async index(req, res) {
        const workoutsExercises = await WorkoutsExercisesRepository_1.default.findAll();
        res.send({ workoutsExercises });
    }
    async store(req, res) {
        const { workoutId, exerciseId, sets, repetitions } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            workoutId,
            exerciseId,
            sets,
            repetitions,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram preenchidos',
                workoutExercise: null,
            });
        }
        const workoutExists = await WorkoutsRepository_1.default.findById(workoutId);
        if (!workoutExists) {
            return res.status(400).json({
                message: 'Treino não encontrado',
                workoutExercise: null,
            });
        }
        const exerciseExists = await ExercisesRepository_1.default.findById(exerciseId);
        if (!exerciseExists) {
            return res.status(400).json({
                message: 'Exercício não encontrado',
                workoutExercise: null,
            });
        }
        const workoutExercise = await WorkoutsExercisesRepository_1.default.create({
            workout_id: workoutId,
            exercise_id: exerciseId,
            sets,
            repetitions,
            duration: 0,
        });
        return res
            .status(200)
            .json({ message: 'Exercicio do treino criado', workoutExercise });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const workoutExercise = await WorkoutsExercisesRepository_1.default.findById(parsedId);
        if (!workoutExercise) {
            return res.status(400).json({
                message: 'Exercicio do treino não encontrado',
                workoutExercise: null,
            });
        }
        await WorkoutsExercisesRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const workoutExercise = await WorkoutsExercisesRepository_1.default.findById(parsedId);
        if (!workoutExercise) {
            return res.status(400).json({
                message: 'Exercicio do treino não encontrado',
                workoutExercise: null,
            });
        }
        return res.status(200).json({ workoutExercise });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { workoutId, exerciseId, sets, repetitions, duration } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            workoutId,
            exerciseId,
            sets,
            repetitions,
            duration,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram preenchidos',
                workoutExercise: null,
            });
        }
        const workoutExerciseExists = await WorkoutsExercisesRepository_1.default.findById(parsedId);
        if (!workoutExerciseExists) {
            return res.status(400).json({
                message: 'Exercicio do treino não encontrado',
                workoutExercise: null,
            });
        }
        const workoutExists = await WorkoutsRepository_1.default.findById(workoutId);
        if (!workoutExists) {
            return res.status(400).json({
                message: 'Treino não encontrado',
                workoutExercise: null,
            });
        }
        const exerciseExists = await ExercisesRepository_1.default.findById(exerciseId);
        if (!exerciseExists) {
            return res.status(400).json({
                message: 'Exercício não encontrado',
                workoutExercise: null,
            });
        }
        const workout_id = Number.isNaN(Number(workoutId))
            ? undefined
            : Number(workoutId);
        const exercise_id = Number.isNaN(Number(exerciseId))
            ? undefined
            : Number(exerciseId);
        const vSets = Number.isNaN(Number(sets)) ? undefined : Number(sets);
        const vRepitions = Number.isNaN(Number(repetitions))
            ? undefined
            : Number(repetitions);
        const vDuration = Number.isNaN(Number(duration))
            ? undefined
            : Number(duration);
        const updatedWorkoutExercise = await WorkoutsExercisesRepository_1.default.update({
            id: parsedId,
            workout_id,
            exercise_id,
            sets: vSets,
            repetitions: vRepitions,
            duration: vDuration,
        });
        return res.status(200).json({
            message: 'Exercicio do treino atualizado',
            workoutExercise: updatedWorkoutExercise,
        });
    }
}
exports.default = new WorkoutsExercisesController();
