"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const ClassesRepository_1 = __importDefault(require("../../repositories/classes/ClassesRepository"));
const GymsRepository_1 = __importDefault(require("../../repositories/gyms/GymsRepository"));
class ClassesController {
    async index(req, res) {
        const classes = await ClassesRepository_1.default.findAll();
        return res.send({ classes });
    }
    async create(req, res) {
        const { gymId, title, description, hour, minMembers, maxMembers } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            gymId,
            title,
            description,
            hour,
            minMembers,
            maxMembers,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram preenchidos',
                class: null,
            });
        }
        const gymExists = await GymsRepository_1.default.findById(gymId);
        if (!gymExists) {
            return res.status(400).json({
                message: 'Academia não encontrada',
                class: null,
            });
        }
        const createdClass = await ClassesRepository_1.default.create({
            gym_id: gymId,
            title,
            description,
            hour,
            min_members: minMembers,
            max_members: maxMembers,
        });
        return res
            .status(200)
            .json({ message: 'Aula criada com sucesso', class: createdClass });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const classExists = await ClassesRepository_1.default.findById(parsedId);
        if (!classExists) {
            return res.status(400).json({
                message: 'Aula não encontrada',
                class: null,
            });
        }
        await ClassesRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const classExists = await ClassesRepository_1.default.findById(parsedId);
        if (!classExists) {
            return res.status(400).json({
                message: 'Aula não encontrada',
                class: null,
            });
        }
        return res
            .status(200)
            .json({ message: 'Aula encontrada', class: classExists });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { gymId, title, description, hour, minMembers, maxMembers } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            gymId,
            title,
            description,
            hour,
            minMembers,
            maxMembers,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram preenchidos',
                class: null,
            });
        }
        const classExists = await ClassesRepository_1.default.findById(parsedId);
        if (!classExists) {
            return res.status(400).json({
                message: 'Aula não encontrada',
                class: null,
            });
        }
        const gymExists = await GymsRepository_1.default.findById(gymId);
        if (!gymExists) {
            return res.status(400).json({
                message: 'Academia não encontrada',
                class: null,
            });
        }
        const titleExists = await ClassesRepository_1.default.findByTitle(title);
        if (titleExists) {
            let id = titleExists.id;
            if (id !== parsedId) {
                return res.status(400).json({
                    message: 'Aula já cadastrada',
                    class: null,
                });
            }
        }
        const gym_id = Number.isNaN(Number(gymId)) ? undefined : Number(gymId);
        const updatedClass = await ClassesRepository_1.default.update({
            id: parsedId,
            gym_id,
            title,
            description,
            hour,
            min_members: minMembers,
            max_members: maxMembers,
        });
        return res
            .status(200)
            .json({ message: 'Aula atualizada com sucesso', class: updatedClass });
    }
}
exports.default = new ClassesController();
