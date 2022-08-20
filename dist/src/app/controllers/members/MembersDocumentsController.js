"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const DocumentsRepository_1 = __importDefault(require("../../repositories/documents/DocumentsRepository"));
const MembersDocumentsRepository_1 = __importDefault(require("../../repositories/members/MembersDocumentsRepository"));
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
class MembersDocumentsController {
    async index(req, res) {
        const memberDocuments = await MembersDocumentsRepository_1.default.findAll();
        return res.send({ memberDocuments });
    }
    async store(req, res) {
        const { memberId, documentId, value } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([memberId, documentId, value]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                memberDocument: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res
                .status(404)
                .json({ message: 'Membro não encontrado', memberDocument: null });
        }
        const documentExists = await DocumentsRepository_1.default.findById(documentId);
        if (!documentExists) {
            return res
                .status(404)
                .json({ message: 'Documento não encontrado', memberDocument: null });
        }
        const memberDocument = await MembersDocumentsRepository_1.default.create({
            member_id: memberId,
            document_id: documentId,
            value,
        });
        return res
            .status(200)
            .json({ message: 'Documento do membro ', memberDocument });
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({
                message: 'ID inválido',
                memberDocument: null,
            });
        }
        const memberDocumentExists = await MembersDocumentsRepository_1.default.findById(parsedId);
        if (!memberDocumentExists) {
            return res.status(404).json({
                message: 'Documento do membro não encontrado',
                memberDocument: null,
            });
        }
        return res.status(200).json({
            message: 'Documento do membro encontrado',
            memberDocument: memberDocumentExists,
        });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({
                message: 'ID inválido',
                memberDocument: null,
            });
        }
        const memberDocumentExists = await MembersDocumentsRepository_1.default.findById(parsedId);
        if (!memberDocumentExists) {
            return res.status(404).json({
                message: 'Documento do membro não encontrado',
                memberDocument: null,
            });
        }
        await MembersDocumentsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { memberId, documentId, value } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([memberId, documentId, value]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                memberDocument: null,
            });
        }
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({
                message: 'ID inválido',
                memberDocument: null,
            });
        }
        const memberDocumentExists = await MembersDocumentsRepository_1.default.findById(parsedId);
        if (!memberDocumentExists) {
            return res.status(404).json({
                message: 'Documento do membro não encontrado',
                memberDocument: null,
            });
        }
        const document_id = Number.isNaN(Number(documentId))
            ? undefined
            : Number(documentId);
        const member_id = Number.isNaN(Number(memberId))
            ? undefined
            : Number(memberId);
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res
                .status(404)
                .json({ message: 'Membro não encontrado', memberDocument: null });
        }
        const documentExists = await DocumentsRepository_1.default.findById(documentId);
        if (!documentExists) {
            return res
                .status(404)
                .json({ message: 'Documento não encontrado', memberDocument: null });
        }
        const memberDocument = await MembersDocumentsRepository_1.default.update({
            id: parsedId,
            member_id,
            document_id,
        });
        return res.status(200).json({
            message: 'Documento do membro atualizado',
            memberDocument,
        });
    }
}
exports.default = new MembersDocumentsController();
