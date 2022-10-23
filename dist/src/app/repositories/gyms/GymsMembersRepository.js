"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { gymMember } = new client_1.PrismaClient();
class GymsMembersRepository {
    async findAll({ gymId }) {
        const gymMembers = await gymMember.findMany({
            select: {
                id: true,
                gym: {
                    select: {
                        name: true,
                    },
                },
                member_id: true,
                member: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true,
                        at_gym: true,
                        height: true,
                        weight: true,
                        memberDocument: {
                            select: {
                                document: {
                                    select: {
                                        name: true,
                                    },
                                },
                                value: true,
                            },
                        },
                    },
                },
            },
            where: {
                gym_id: gymId,
            },
        });
        return gymMembers;
    }
    async create({ gym_id, member_id }) {
        const createdGymMember = await gymMember.create({
            data: {
                gym_id,
                member_id,
            },
            select: {
                id: true,
                gym: {
                    select: {
                        name: true,
                    },
                },
                member: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return createdGymMember;
    }
    async findById(id) {
        const gymMemberExists = await gymMember.findFirst({
            where: {
                id,
            },
        });
        return gymMemberExists;
    }
    async delete(id) {
        await gymMember.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update(id, { gym_id, member_id }) {
        const updatedGymMember = await gymMember.update({
            where: {
                id,
            },
            data: {
                gym_id,
                member_id,
            },
        });
        return updatedGymMember;
    }
    async findByMember(member_id) {
        const gymMemberExists = await gymMember.findFirst({
            where: {
                member_id,
            },
            select: {
                id: true,
                gym_id: true,
                gym: {
                    select: {
                        name: true,
                        current_capacity: true,
                    },
                },
            },
        });
        return gymMemberExists;
    }
    async getMembersAtGym({ gym_id }) {
        const members = await gymMember.count({
            where: {
                AND: {
                    gym_id,
                    member: {
                        at_gym: true,
                    },
                },
            },
        });
        return members;
    }
}
exports.default = new GymsMembersRepository();
