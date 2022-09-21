"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TermsRepository_1 = __importDefault(require("../../repositories/terms/TermsRepository"));
class TermsController {
    async index(req, res) {
        const term = await TermsRepository_1.default.getTerms();
        return res.status(200).json({ message: 'Termos de uso', term });
    }
    async store(req, res) {
        const { content } = req.body;
        const termExists = await TermsRepository_1.default.getTerms();
        if (termExists) {
            return res
                .status(400)
                .json({ message: 'Termos de uso já cadastrados', term: null });
        }
        const term = await TermsRepository_1.default.create(content);
        return res.status(200).json({ message: 'Termo de uso criado', term });
    }
    async update(req, res) {
        const { content } = req.body;
        console.log(req.body);
        // const termExists = await TermsRepository.getTerms();
        // if (!termExists) {
        //   return res
        //     .status(404)
        //     .json({ message: 'Termos de uso não cadastrados', term: null });
        // }
        // const term = await TermsRepository.update({ id: termExists.id, content });
        // return res.status(200).json({ message: 'Termo de uso atualizado', term });
    }
}
exports.default = new TermsController();
