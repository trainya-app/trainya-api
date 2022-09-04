"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const DocumentsRepository_1 = __importDefault(require("../../repositories/documents/DocumentsRepository"));
class DocumentsController {
    async index(req, res) {
        const documents = await DocumentsRepository_1.default.findAll();
        return res.send({ documents });
    }
    async store(req, res) {
        const { name } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([name]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                document: null,
            });
        }
        const nameExists = await DocumentsRepository_1.default.findByName({ name });
        if (nameExists) {
            return res
                .status(400)
                .json({ message: 'Nome já está em uso', document: null });
        }
        const document = await DocumentsRepository_1.default.create({ name });
        return res.status(200).json({ message: 'Documento criado', document });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID inválido', document: null });
        }
        const documentExists = await DocumentsRepository_1.default.findById(parsedId);
        if (!documentExists) {
            return res
                .status(404)
                .json({ message: 'Documento não encontrado', document: null });
        }
        await DocumentsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID inválido', document: null });
        }
        const documentExists = await DocumentsRepository_1.default.findById(parsedId);
        if (!documentExists) {
            return res
                .status(404)
                .json({ message: 'Documento não encontrado', document: null });
        }
        return res
            .status(200)
            .json({ message: 'Documento encontrado', document: documentExists });
    }
    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const parsedId = Number(id);
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID inválido', document: null });
        }
        const documentExists = await DocumentsRepository_1.default.findById(parsedId);
        if (!documentExists) {
            return res
                .status(404)
                .json({ message: 'Documento não encontrado', document: null });
        }
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([name]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                document: null,
            });
        }
        const nameExists = await DocumentsRepository_1.default.findByName(name);
        if (nameExists) {
            const idByName = await DocumentsRepository_1.default.findIdByName(name);
            let id = idByName.id;
            if (id != parsedId) {
                return res
                    .status(400)
                    .json({ message: 'Nome já está em uso', document: null });
            }
        }
        const document = await DocumentsRepository_1.default.update({ name, id: parsedId });
        return res.status(200).json({ message: 'Documento atualizado', document });
    }
}
exports.default = new DocumentsController();
