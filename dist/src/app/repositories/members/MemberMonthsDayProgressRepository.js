"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { memberMonthDayProgress } = new client_1.PrismaClient();
class MemberMonthsDayProgressRepository {
    async findAll() {
        return await memberMonthDayProgress.findMany({
            select: {
                id: true,
                member: {
                    select: {
                        name: true,
                    },
                },
                month: {
                    select: {
                        name: true,
                    },
                },
                current_progress: true,
            },
        });
    }
    async create({ member_id, month_id, }) {
        const createdMemberMonthsDayProgresses = await memberMonthDayProgress.create({
            data: {
                member_id,
                month_id,
            },
            select: {
                id: true,
                member: {
                    select: {
                        name: true,
                    },
                },
                month: {
                    select: {
                        name: true,
                    },
                },
                current_progress: true,
            },
        });
        return createdMemberMonthsDayProgresses;
    }
    async deleteAllByMember(member_id) {
        await memberMonthDayProgress.deleteMany({
            where: {
                member_id,
            },
        });
        return;
    }
    async findByMemberId(member_id) {
        return await memberMonthDayProgress.findMany({
            where: {
                member_id,
            },
            select: {
                id: true,
                member_id: true,
                member: {
                    select: {
                        name: true,
                    },
                },
                month_id: true,
                month: {
                    select: {
                        name: true,
                    },
                },
                current_progress: true,
            },
        });
    }
    async findByMemberAndMonthId({ member_id, month_id, }) {
        return await memberMonthDayProgress.findFirst({
            where: {
                member_id,
                month_id,
            },
            select: {
                id: true,
                member_id: true,
                member: {
                    select: {
                        name: true,
                    },
                },
                month_id: true,
                month: {
                    select: {
                        name: true,
                    },
                },
                current_progress: true,
            },
        });
    }
    async updateProgress({ id, current_progress, }) {
        const updatedProgress = await memberMonthDayProgress.update({
            where: {
                id,
            },
            data: {
                current_progress,
            },
        });
        return updatedProgress;
    }
    async createForAllMonths(member_id) {
        try {
            const createdProgresses = await memberMonthDayProgress.createMany({
                data: [
                    { member_id, month_id: 1 },
                    { member_id, month_id: 2 },
                    { member_id, month_id: 3 },
                    { member_id, month_id: 4 },
                    { member_id, month_id: 5 },
                    { member_id, month_id: 6 },
                    { member_id, month_id: 7 },
                    { member_id, month_id: 8 },
                    { member_id, month_id: 9 },
                    { member_id, month_id: 10 },
                    { member_id, month_id: 11 },
                    { member_id, month_id: 12 },
                ],
            });
            return createdProgresses;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
}
exports.default = new MemberMonthsDayProgressRepository();
