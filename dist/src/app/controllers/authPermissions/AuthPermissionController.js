"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const AuthPermissionsRepository_1 = __importDefault(require("../../repositories/authPermissions/AuthPermissionsRepository"));
class AuthPermissionController {
    async index(req, res) {
        const authPermissions = await AuthPermissionsRepository_1.default.findAll();
        return res.send({ authPermissions });
    }
    async store(req, res) {
        const { name, description } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([name, description]);
        if (someFieldIsEmpty) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram enviados',
                authPermission: null,
            });
        }
        const authPermissionExists = await AuthPermissionsRepository_1.default.findByName(name);
        if (authPermissionExists) {
            return res.status(400).send({
                message: 'Permissão de autorização já cadastrado',
                authPermission: null,
            });
        }
        const authPermission = await AuthPermissionsRepository_1.default.create({
            name,
            description,
        });
        return res.status(200).json({
            message: 'Cargo de autorização criado com sucesso',
            authPermission,
        });
    }
}
exports.default = new AuthPermissionController();
