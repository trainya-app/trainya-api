"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { memberworkoutplanworkout } = new client_1.PrismaClient();
class MembersWorkoutsPlansRepository {
    async findAll() {
        const memberWorkoutPlans = await memberworkoutplanworkout.findMany();
        return memberWorkoutPlans;
    }
    async setFinished({ memberId, workoutPlanWorkoutId }) {
        const finishedWorkout = await memberworkoutplanworkout.create({
            data: {
                memberId,
                workoutPlanWorkoutId,
                is_complete: true
            }
        });
        return finishedWorkout;
    }
    async findByMember(memberId) {
        const finishedWorkouts = await memberworkoutplanworkout.findMany({
            where: {
                memberId,
            }
        });
        return finishedWorkouts;
    }
    async findByMemberAndWorkoutPlanWorkout({ memberId, workoutPlanWorkoutId }) {
        return await memberworkoutplanworkout.findFirst({
            where: {
                memberId,
                workoutPlanWorkoutId
            }
        });
    }
    async delete(id) {
        return await memberworkoutplanworkout.delete({
            where: {
                id
            }
        });
    }
}
exports.default = new MembersWorkoutsPlansRepository();
