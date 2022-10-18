"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { memberClass } = new client_1.PrismaClient();
class MembersClassesRepository {
    async findAll() {
        const memberClasses = await memberClass.findMany();
        return memberClasses;
    }
    async create({ member_id, class_id }) {
        const createdMemberClass = await memberClass.create({
            data: {
                member_id,
                class_id,
            },
        });
        return createdMemberClass;
    }
    async findById(id) {
        const memberClassExists = await memberClass.findFirst({
            where: {
                id,
            },
        });
        return memberClassExists;
    }
    async delete(id) {
        await memberClass.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, member_id, class_id }) {
        const updatedMemberClass = await memberClass.update({
            where: {
                id,
            },
            data: {
                member_id,
                class_id,
            },
        });
        return updatedMemberClass;
    }
    async findByMember(member_id) {
        return await memberClass.findMany({
            where: {
                member_id,
            },
            select: {
                class: {
                    select: {
                        title: true,
                        min_members: true,
                        max_members: true,
                        hour: true,
                        classWeekDay: {
                            select: {
                                weekDay: {
                                    select: {
                                        name: true,
                                    },
                                },
                            },
                        },
                        employeeClass: {
                            select: {
                                employee: {
                                    select: {
                                        name: true,
                                    },
                                },
                            },
                        },
                    },
                },
                member_id: true,
            },
        });
    }
}
exports.default = new MembersClassesRepository();
