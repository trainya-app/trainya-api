"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { gymMember } = new client_1.PrismaClient();
class GymsMembersRepository {
    async findAll() {
        const gymMembers = await gymMember.findMany();
        return gymMembers;
    }
    async create({ gym_id, member_id }) {
        const createdGymMember = await gymMember.create({
            data: {
                gym_id,
                member_id,
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
}
exports.default = new GymsMembersRepository();
