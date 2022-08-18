"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RollsRepository_1 = __importDefault(require("../../repositories/rolls/RollsRepository"));
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
class RollsController {
    async index(req, res) {
        const rolls = await RollsRepository_1.default.findAll();
        res.send(rolls);
    }
    async store(req, res) {
        const { title, accessLevel } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([title, accessLevel]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram inseridos',
                roll: null,
            });
        }
        const rollExists = await RollsRepository_1.default.findByTitle({ title });
        if (rollExists) {
            return res.status(400).json({ message: 'Cargo já existe', roll: null });
        }
        const roll = await RollsRepository_1.default.create({
            title,
            access_level: accessLevel,
        });
        return res.status(200).json({ message: 'Cargo criado', roll });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const rollExists = await RollsRepository_1.default.findById(parsedId);
        if (!rollExists) {
            return res
                .status(401)
                .json({ message: 'Cargo não encontrado', roll: null });
        }
        await RollsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const roll = await RollsRepository_1.default.findById(parsedId);
        if (!roll) {
            return res
                .status(404)
                .json({ message: 'Cargo não encontrado', roll: null });
        }
        return res.status(200).json({ message: 'Cargo encontrado', roll });
    }
    async update(req, res) {
        const { title, accessLevel } = req.body;
        const { id } = req.params;
        const parsedId = Number(id);
        const rollExists = await RollsRepository_1.default.findById(parsedId);
        if (!rollExists) {
            return res
                .status(404)
                .json({ message: 'Cargo não encontrado', roll: null });
        }
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([title, accessLevel]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram inseridos',
                roll: null,
            });
        }
        const updatedRoll = await RollsRepository_1.default.update({
            title,
            access_level: accessLevel,
            id: parsedId,
        });
        return res.json({ message: 'Cargo atualizado', updatedRoll });
    }
}
exports.default = new RollsController();
