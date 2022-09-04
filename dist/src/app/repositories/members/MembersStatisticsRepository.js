"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { memberStatistic } = new client_1.PrismaClient();
class MembersStatisticsRepository {
    async findAll() {
        const memberStatistics = memberStatistic.findMany();
        return memberStatistics;
    }
    async create({ member_id, statistic_id, value }) {
        const createdMemberStatistic = await memberStatistic.create({
            data: {
                member_id,
                statistic_id,
                value,
            },
        });
        return createdMemberStatistic;
    }
    async findById(id) {
        const memberStatisticExists = await memberStatistic.findFirst({
            where: {
                id,
            },
        });
        return memberStatisticExists;
    }
    async delete(id) {
        await memberStatistic.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, member_id, statistic_id, value }) {
        const updatedMemberStatistic = await memberStatistic.update({
            data: {
                member_id,
                statistic_id,
                value,
            },
            where: {
                id,
            },
        });
        return updatedMemberStatistic;
    }
}
exports.default = new MembersStatisticsRepository();
