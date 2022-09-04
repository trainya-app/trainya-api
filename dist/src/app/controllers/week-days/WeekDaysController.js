"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const WeekDaysRepository_1 = __importDefault(require("../../repositories/week-days/WeekDaysRepository"));
class WeekDaysController {
    async index(req, res) {
        const weekDays = await WeekDaysRepository_1.default.findAll();
        return res.send({ weekDays });
    }
    async store(req, res) {
        const { name } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([name]);
        if (someFieldIsEmpty) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram enviados',
                weekDay: null,
            });
        }
        const weekDayExists = await WeekDaysRepository_1.default.findByName(name);
        if (weekDayExists) {
            return res.status(400).send({
                message: 'Dia da semana já existe',
                weekDay: null,
            });
        }
        const weekDay = await WeekDaysRepository_1.default.create({ name });
        return res.status(200).json({ message: 'Dia da semana criado', weekDay });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const weekDay = await WeekDaysRepository_1.default.findById(parsedId);
        if (!weekDay) {
            return res.status(400).send({
                message: 'Dia da semana não encontrado',
                weekDay: null,
            });
        }
        await WeekDaysRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const weekDay = await WeekDaysRepository_1.default.findById(parsedId);
        if (!weekDay) {
            return res.status(400).send({
                message: 'Dia da semana não encontrado',
                weekDay: null,
            });
        }
        return res.send({ weekDay });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { name } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([name]);
        if (someFieldIsEmpty) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram enviados',
                weekDay: null,
            });
        }
        const weekDay = await WeekDaysRepository_1.default.findById(parsedId);
        if (!weekDay) {
            return res.status(400).send({
                message: 'Dia da semana não encontrado',
                weekDay: null,
            });
        }
        const weekDayExists = await WeekDaysRepository_1.default.findByName(name);
        if (weekDayExists) {
            let id = weekDayExists.id;
            if (id != parsedId) {
                return res.status(400).send({
                    message: 'Dia da semana já existe',
                    weekDay: null,
                });
            }
            const updatedWeekDay = await WeekDaysRepository_1.default.update({
                id: parsedId,
                name,
            });
            return res
                .status(200)
                .json({ message: 'Dia da semana atualizado', weekDay: updatedWeekDay });
        }
    }
}
exports.default = new WeekDaysController();
