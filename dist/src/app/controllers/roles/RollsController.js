"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RolesRepository_1 = __importDefault(require("../../repositories/roles/RolesRepository"));
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
class RolesController {
    async index(req, res) {
        const roles = await RolesRepository_1.default.findAll();
        res.send({ roles });
    }
    async store(req, res) {
        const { title, accessLevel } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([title, accessLevel]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram inseridos',
                role: null,
            });
        }
        const roleExists = await RolesRepository_1.default.findByTitle({ title });
        if (roleExists) {
            return res.status(400).json({ message: 'Cargo já existe', role: null });
        }
        const role = await RolesRepository_1.default.create({
            title,
            access_level: accessLevel,
        });
        return res.status(200).json({ message: 'Cargo criado', role });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const roleExists = await RolesRepository_1.default.findById(parsedId);
        if (!roleExists) {
            return res
                .status(401)
                .json({ message: 'Cargo não encontrado', role: null });
        }
        await RolesRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const role = await RolesRepository_1.default.findById(parsedId);
        if (!role) {
            return res
                .status(404)
                .json({ message: 'Cargo não encontrado', role: null });
        }
        return res.status(200).json({ message: 'Cargo encontrado', role });
    }
    async update(req, res) {
        const { title, accessLevel } = req.body;
        const { id } = req.params;
        const parsedId = Number(id);
        const roleExists = await RolesRepository_1.default.findById(parsedId);
        if (!roleExists) {
            return res
                .status(404)
                .json({ message: 'Cargo não encontrado', role: null });
        }
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([title, accessLevel]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram inseridos',
                role: null,
            });
        }
        const updatedRole = await RolesRepository_1.default.update({
            title,
            access_level: accessLevel,
            id: parsedId,
        });
        return res.json({ message: 'Cargo atualizado', updatedRole });
    }
}
exports.default = new RolesController();
