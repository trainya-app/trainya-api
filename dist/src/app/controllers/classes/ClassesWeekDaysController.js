"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const ClassesRepository_1 = __importDefault(require("../../repositories/classes/ClassesRepository"));
const ClassesWeekDaysRepository_1 = __importDefault(require("../../repositories/classes/ClassesWeekDaysRepository"));
const WeekDaysRepository_1 = __importDefault(require("../../repositories/week-days/WeekDaysRepository"));
class ClassesWeekDaysController {
    async index(req, res) {
        const classesWeekDays = await ClassesWeekDaysRepository_1.default.findAll();
        return res.send({ classesWeekDays });
    }
    async store(req, res) {
        const { weekDayId, classId } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([weekDayId, classId]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                classWeekDay: null,
            });
        }
        const weekDayExists = await WeekDaysRepository_1.default.findById(weekDayId);
        if (!weekDayExists) {
            return res
                .status(400)
                .json({ message: 'Dia da semana não encontrado', classWeekDay: null });
        }
        const classExists = await ClassesRepository_1.default.findById(classId);
        if (!classExists) {
            return res
                .status(400)
                .json({ message: 'Aula não encontrada', classWeekDay: null });
        }
        const createdClassWeekDay = await ClassesWeekDaysRepository_1.default.create({
            class_id: classId,
            week_day_id: weekDayId,
        });
        return res
            .status(200)
            .json({ message: 'Aula do dia da semana criado', createdClassWeekDay });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const classWeekDayExists = await ClassesWeekDaysRepository_1.default.findById(parsedId);
        if (!classWeekDayExists) {
            return res.status(400).json({
                message: 'Aula do dia da semana não encontrado',
                classWeekDay: null,
            });
        }
        await ClassesWeekDaysRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const classWeekDayExists = await ClassesWeekDaysRepository_1.default.findById(parsedId);
        if (!classWeekDayExists) {
            return res.status(400).json({
                message: 'Aula do dia da semana não encontrado',
                classWeekDay: null,
            });
        }
        return res.status(200).json({
            message: 'Aula do dia da semana encontrada',
            classWeekDay: classWeekDayExists,
        });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { weekDayId, classId } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([weekDayId, classId]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                classWeekDay: null,
            });
        }
        const weekDayExists = await WeekDaysRepository_1.default.findById(weekDayId);
        if (!weekDayExists) {
            return res
                .status(400)
                .json({ message: 'Dia da semana não encontrado', classWeekDay: null });
        }
        const classExists = await ClassesRepository_1.default.findById(classId);
        if (!classExists) {
            return res
                .status(400)
                .json({ message: 'Aula não encontrada', classWeekDay: null });
        }
        const classWeekDayExists = await ClassesWeekDaysRepository_1.default.findById(parsedId);
        if (!classWeekDayExists) {
            return res.status(400).json({
                message: 'Aula do dia da semana não encontrado',
                classWeekDay: null,
            });
        }
        const week_day_id = Number.isNaN(Number(weekDayId))
            ? undefined
            : Number(weekDayId);
        const class_id = Number.isNaN(Number(classId))
            ? undefined
            : Number(classId);
        const updatedClassWeekDay = await ClassesWeekDaysRepository_1.default.update({
            id: parsedId,
            week_day_id,
            class_id,
        });
        return res.status(200).json({
            message: 'Aula do dia da semana atualizada',
            classWeekDay: updatedClassWeekDay,
        });
    }
}
exports.default = new ClassesWeekDaysController();
