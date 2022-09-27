"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrivacyPoliciesRepository_1 = __importDefault(require("../../repositories/privacyPolicies/PrivacyPoliciesRepository"));
class PrivacyPoliciesController {
    async index(req, res) {
        const privacyPolicies = await PrivacyPoliciesRepository_1.default.findAll();
        return res.json({ privacyPolicies });
    }
    async store(req, res) {
        const content = req.body;
        const termExists = await PrivacyPoliciesRepository_1.default.findAll();
        if (termExists) {
            return res.status(400).json({
                message: 'Políticas de Privacidade já cadastradas',
                privacyPolicies: null,
            });
        }
        const privacyPolicies = await PrivacyPoliciesRepository_1.default.create(content);
        return res
            .status(200)
            .json({ message: 'Política de Privacidade criada', privacyPolicies });
    }
    async update(req, res) {
        const content = req.body;
        const privacyPolicieExists = await PrivacyPoliciesRepository_1.default.findAll();
        if (!privacyPolicieExists) {
            return res.status(404).json({
                message: 'Política de Privacidade não cadastrada',
                privacyPolicie: null,
            });
        }
        const privacyPolicie = await PrivacyPoliciesRepository_1.default.update({
            id: privacyPolicieExists.id,
            content,
        });
        return res
            .status(200)
            .json({ message: 'Termo de uso atualizado', privacyPolicie });
    }
}
exports.default = new PrivacyPoliciesController();
