"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const ClassesRepository_1 = __importDefault(require("../../repositories/classes/ClassesRepository"));
const MembersClassesRepository_1 = __importDefault(require("../../repositories/members/MembersClassesRepository"));
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
class MembersClassesController {
    async index(req, res) {
        const memberClasses = await MembersClassesRepository_1.default.findAll();
        return res.send({ memberClasses });
    }
    async store(req, res) {
        const { memberId, classId } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([memberId, classId]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                memberClass: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res
                .status(400)
                .json({ message: 'Membro não encontrado', memberClass: null });
        }
        const classExists = await ClassesRepository_1.default.findById(classId);
        if (!classExists) {
            return res
                .status(400)
                .json({ message: 'Aula não encontrada', memberClass: null });
        }
        const memberClass = await MembersClassesRepository_1.default.create({
            member_id: memberId,
            class_id: classId,
        });
        return res
            .status(200)
            .json({ message: 'Aula do membro criada', memberClass });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberClassExists = await MembersClassesRepository_1.default.findById(parsedId);
        if (!memberClassExists) {
            return res
                .status(400)
                .json({ message: 'Aula do membro não encontrada', memberClass: null });
        }
        await MembersClassesRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberClassExists = await MembersClassesRepository_1.default.findById(parsedId);
        if (!memberClassExists) {
            return res
                .status(400)
                .json({ message: 'Aula do membro não encontrada', memberClass: null });
        }
        return res.status(200).json({
            message: 'Aula do membro encontrada',
            memberClass: memberClassExists,
        });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { memberId, classId } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([memberId, classId]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                memberClass: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res
                .status(400)
                .json({ message: 'Membro não encontrado', memberClass: null });
        }
        const classExists = await ClassesRepository_1.default.findById(classId);
        if (!classExists) {
            return res
                .status(400)
                .json({ message: 'Aula não encontrada', memberClass: null });
        }
        const memberClass = await MembersClassesRepository_1.default.update({
            id: parsedId,
            member_id: memberId,
            class_id: classId,
        });
        return res
            .status(200)
            .json({ message: 'Aula do membro atualizada', memberClass });
    }
}
exports.default = new MembersClassesController();
