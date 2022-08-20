"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const GoalsRepository_1 = __importDefault(require("../../repositories/goals/GoalsRepository"));
class GoalsController {
    async index(req, res) {
        const goals = await GoalsRepository_1.default.findAll();
        return res.send({ goals });
    }
    async store(req, res) {
        const { description } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([description]);
        if (someFieldIsEmpty) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram enviados',
                goal: null,
            });
        }
        const goalExists = await GoalsRepository_1.default.findByDescription({ description });
        if (goalExists) {
            return res.status(400).send({
                message: 'Meta já cadastrada',
                goal: null,
            });
        }
        const goal = await GoalsRepository_1.default.create({ description });
        return res.status(200).json({ goal });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const goalExists = await GoalsRepository_1.default.findById(parsedId);
        if (!goalExists) {
            return res.status(400).send({
                message: 'Meta não encontrada',
                goal: null,
            });
        }
        await GoalsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const goalExists = await GoalsRepository_1.default.findById(parsedId);
        if (!goalExists) {
            return res.status(400).send({
                message: 'Meta não encontrada',
                goal: null,
            });
        }
        return res.send({ goal: goalExists });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { description } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([description]);
        if (someFieldIsEmpty) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram enviados',
                goal: null,
            });
        }
        const goalExists = await GoalsRepository_1.default.findById(parsedId);
        if (!goalExists) {
            return res.status(400).send({
                message: 'Meta não encontrada',
                goal: null,
            });
        }
        const descriptionExists = await GoalsRepository_1.default.findByDescription({
            description,
        });
        if (descriptionExists) {
            let id = descriptionExists.id;
            if (id != parsedId) {
                return res
                    .status(400)
                    .json({ message: 'Meta já está em uso', goal: null });
            }
        }
        const goal = await GoalsRepository_1.default.update({
            id: parsedId,
            description,
        });
        return res.status(200).json({ goal });
    }
}
exports.default = new GoalsController();
