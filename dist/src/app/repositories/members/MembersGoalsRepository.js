"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { memberGoal } = new client_1.PrismaClient();
class MembersGoalsRepository {
    async findAll() {
        const memberGoals = await memberGoal.findMany();
        return memberGoals;
    }
    async store({ member_id, goal_id, desired_progress, current_progress, started_at, finish_at, finished_at, }) {
        const createdMemberGoal = await memberGoal.create({
            data: {
                member_id,
                goal_id,
                desired_progress,
                current_progress,
                started_at,
                finish_at,
                finished_at,
            },
        });
        return createdMemberGoal;
    }
    async delete(id) {
        await memberGoal.delete({
            where: { id },
        });
        return true;
    }
    async findById(id) {
        const memberGoalExists = await memberGoal.findFirst({
            where: { id },
        });
        return memberGoalExists;
    }
    async update({ id, member_id, goal_id, desired_progress, current_progress, started_at, finish_at, finished_at, }) {
        const updatedMemberGoal = await memberGoal.update({
            where: { id },
            data: {
                member_id,
                goal_id,
                desired_progress,
                current_progress,
                started_at,
                finish_at,
                finished_at,
            },
        });
        return updatedMemberGoal;
    }
}
exports.default = new MembersGoalsRepository();
