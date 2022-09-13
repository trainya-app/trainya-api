"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ACLRepository_1 = __importDefault(require("../../repositories/ACL/ACLRepository"));
const AuthPermissionsRepository_1 = __importDefault(require("../../repositories/authPermissions/AuthPermissionsRepository"));
const AuthRoleRepository_1 = __importDefault(require("../../repositories/authRole/AuthRoleRepository"));
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
class ACLController {
    async index(req, res) {
        const memberRoles = await ACLRepository_1.default.findMemberRoles();
        const memberPermisions = await ACLRepository_1.default.findMemberPermissions();
        return res.send({ memberRoles, memberPermisions });
    }
    async store(req, res) {
        const { roleId, permisionId } = req.body;
        const { userId } = req;
        const memberExists = await MembersRepository_1.default.findById(Number(userId));
        if (!memberExists) {
            return res.status(404).json({
                message: 'Membro não encontrado',
                memberRole: null,
                memberPermision: null,
            });
        }
        const authRoleExists = await AuthRoleRepository_1.default.findById(Number(roleId));
        if (!authRoleExists) {
            return res.status(404).json({
                message: 'Cargo de autorização não encontrado',
                memberRole: null,
                memberPermision: null,
            });
        }
        const memberRole = await ACLRepository_1.default.createMemberRole({
            member_id: Number(userId),
            authRole_id: roleId,
        });
        const authPermissionExists = await AuthPermissionsRepository_1.default.findById(Number(permisionId));
        if (!authPermissionExists) {
            return res.status(404).json({
                message: 'Permissão de autorização não encontrada',
                memberRole: null,
                memberPermision: null,
            });
        }
        const memberPermision = await ACLRepository_1.default.createMemberPermission({
            member_id: Number(userId),
            permission_id: permisionId,
        });
        return res
            .status(200)
            .json({ message: 'Sucesso', memberRole, memberPermision });
    }
}
exports.default = new ACLController();
