"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = void 0;
const ACLRepository_1 = __importDefault(require("../repositories/ACL/ACLRepository"));
const MembersRepository_1 = __importDefault(require("../repositories/members/MembersRepository"));
function can(permissionsRoute) {
    return async (req, res, next) => {
        const { userId } = req;
        const user = await MembersRepository_1.default.findById(Number(userId));
        console.log({ user });
        const userPermissions = await ACLRepository_1.default.findMemberPermissionByMemberId(Number(userId));
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }
        const permisisonExists = userPermissions
            .map((permission) => { var _a; return (_a = permission.permission) === null || _a === void 0 ? void 0 : _a.name; })
            .some((permission) => permissionsRoute.includes(permission));
        console.log({ permisisonExists, permissionsRoute }, userPermissions);
        if (!permisisonExists) {
            return res
                .status(401)
                .json({ message: 'Você não tem permissão para acessar essa rota' });
        }
        return next();
    };
}
exports.default = can;
function is(rolesRoute) {
    return async (req, res, next) => {
        const { userId } = req;
        const user = await MembersRepository_1.default.findById(Number(userId));
        console.log({ user });
        const userRoles = await ACLRepository_1.default.findMemberRoleByMemberId(Number(userId));
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }
        const roleExists = userRoles
            .map((role) => { var _a; return (_a = role.authRole) === null || _a === void 0 ? void 0 : _a.name; })
            .some((role) => rolesRoute.includes(role));
        if (!roleExists) {
            return res
                .status(401)
                .json({ message: 'Você não tem cargo para acessar essa rota' });
        }
        return next();
    };
}
exports.is = is;
