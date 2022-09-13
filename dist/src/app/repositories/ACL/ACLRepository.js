"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { memberRole } = new client_1.PrismaClient();
const { memberPermision } = new client_1.PrismaClient();
class ACLRepository {
    async findMemberRoles() {
        return await memberRole.findMany({
            select: {
                member_id: true,
                authRole_id: true,
                id: true,
                authRole: {
                    select: {
                        name: true,
                    },
                },
            },
        });
    }
    async findMemberPermissions() {
        return await memberPermision.findMany({
            select: {
                member_id: true,
                permission_id: true,
                id: true,
                permission: {
                    select: {
                        name: true,
                    },
                },
            },
        });
    }
    async createMemberRole({ member_id, authRole_id }) {
        const createdMemberRole = await memberRole.create({
            data: {
                member_id,
                authRole_id,
            },
        });
        return createdMemberRole;
    }
    async createMemberPermission({ member_id, permission_id, }) {
        const createdMemberPermission = await memberPermision.create({
            data: {
                member_id,
                permission_id,
            },
        });
        return createdMemberPermission;
    }
    async findMemberPermissionByMemberId(member_id) {
        const memberPermissions = await memberPermision.findMany({
            where: { member_id },
            select: {
                permission_id: false,
                member_id: false,
                permission: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return memberPermissions;
    }
    async findMemberRoleByMemberId(member_id) {
        const memberRoles = await memberRole.findMany({
            where: { member_id },
            select: {
                authRole_id: false,
                member_id: false,
                authRole: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return memberRoles;
    }
}
exports.default = new ACLRepository();
