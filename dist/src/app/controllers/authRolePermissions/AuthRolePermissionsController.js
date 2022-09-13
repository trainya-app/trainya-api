"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthPermissionsRepository_1 = __importDefault(require("../../repositories/authPermissions/AuthPermissionsRepository"));
const AuthRoleRepository_1 = __importDefault(require("../../repositories/authRole/AuthRoleRepository"));
const AuthRolePermissionsRepository_1 = __importDefault(require("../../repositories/authRolePermissions/AuthRolePermissionsRepository"));
class AuthRolePermissionsController {
    async index(req, res) {
        const authRolePermissions = await AuthRolePermissionsRepository_1.default.findAll();
        return res.send({ authRolePermissions });
    }
    async store(req, res) {
        const { roleId, permissionId } = req.body;
        const authRoleExists = await AuthRoleRepository_1.default.findById(roleId);
        if (!authRoleExists) {
            return res.status(404).json({
                message: 'Cargo de autorização nao encontrado',
                authRolePermission: null,
            });
        }
        const authPermissionExists = await AuthPermissionsRepository_1.default.findById(permissionId);
        if (!authPermissionExists) {
            return res.status(404).json({
                message: 'Permissão de autorização nao encontrada',
                authRolePermission: null,
            });
        }
        const authRolePermission = await AuthRolePermissionsRepository_1.default.create({
            authRole_id: roleId,
            permission_id: permissionId,
        });
        return res.status(200).json({ message: 'Sucesso', authRolePermission });
    }
}
exports.default = new AuthRolePermissionsController();
