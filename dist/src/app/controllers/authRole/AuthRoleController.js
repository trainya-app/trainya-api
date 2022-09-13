"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const AuthRoleRepository_1 = __importDefault(require("../../repositories/authRole/AuthRoleRepository"));
class AuthRoleController {
    async index(req, res) {
        const authRoles = await AuthRoleRepository_1.default.findAll();
        return res.send({ authRoles });
    }
    async store(req, res) {
        const { name, description } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([name, description]);
        if (someFieldIsEmpty) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram enviados',
                authRole: null,
            });
        }
        const authRoleExists = await AuthRoleRepository_1.default.findByName(name);
        if (authRoleExists) {
            return res.status(400).send({
                message: 'Cargo de autorização já cadastrado',
                authRole: null,
            });
        }
        const authRole = await AuthRoleRepository_1.default.create({ name, description });
        return res
            .status(200)
            .json({ message: 'Cargo de autorização criado com sucesso', authRole });
    }
}
exports.default = new AuthRoleController();
