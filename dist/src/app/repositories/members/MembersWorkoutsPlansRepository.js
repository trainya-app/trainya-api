"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { memberWorkoutPlan } = new client_1.PrismaClient();
class MembersWorkoutsPlansRepository {
    async findAll() {
        const memberWorkoutPlans = await memberWorkoutPlan.findMany();
        return memberWorkoutPlans;
    }
    async create({ member_id, workouts_plan_id, finish_at, finished_at, started_at, }) {
        const createdMemberWorkoutPlan = await memberWorkoutPlan.create({
            data: {
                member_id,
                workouts_plan_id,
                finish_at,
                finished_at,
                started_at,
            },
            select: {
                id: true,
                member_id: true,
                member: {
                    select: {
                        name: true,
                    },
                },
                workouts_plan_id: true,
                workoutPlan: {
                    select: {
                        goal: true,
                    },
                },
                finish_at: true,
                started_at: true,
                finished_at: true,
            },
        });
        return createdMemberWorkoutPlan;
    }
    async findById(memberId) {
        const memberWorkoutPlanExists = await memberWorkoutPlan.findMany({
            where: {
                member_id: memberId,
            },
            orderBy: {
                created_at: 'desc',
            },
            include: {
                workoutPlan: {
                    include: {
                        workoutPlanWorkout: {
                            include: {
                                workout: {
                                    include: {
                                        workoutExercise: {
                                            include: {
                                                exercise: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        return memberWorkoutPlanExists[0];
    }
    async delete(id) {
        await memberWorkoutPlan.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, finish_at, finished_at, started_at, member_id, workouts_plan_id, }) {
        const updatedMemberWorkoutPlan = await memberWorkoutPlan.update({
            data: {
                finish_at,
                finished_at,
                started_at,
                member_id,
                workouts_plan_id,
            },
            where: {
                id,
            },
        });
        return updatedMemberWorkoutPlan;
    }
    async findByMemberId(member_id) {
        const memberWorkoutPlanExists = await memberWorkoutPlan.findFirst({
            where: {
                member_id,
            },
            select: {
                workouts_plan_id: true,
                workoutPlan: {
                    select: {
                        goal: true,
                        workoutPlanWorkout: {
                            select: {
                                id: true,
                                workout: {
                                    select: {
                                        id: true,
                                        title: true,
                                        workoutExercise: {
                                            select: {
                                                exercise: {
                                                    select: {
                                                        name: true,
                                                        comment: true,
                                                    },
                                                },
                                                repetitions: true,
                                                sets: true,
                                            },
                                        },
                                        duration: true,
                                    },
                                },
                            },
                        },
                    },
                },
                finish_at: true,
                finished_at: true,
                started_at: true,
            },
        });
        return memberWorkoutPlanExists;
    }
    async findByMemberIdAndWorkoutPlanId({ memberId, workoutPlanId, }) {
        const memberExistsInWorkoutPlan = await memberWorkoutPlan.findFirst({
            where: {
                member_id: memberId,
                workouts_plan_id: workoutPlanId,
            },
        });
        return memberExistsInWorkoutPlan;
    }
}
exports.default = new MembersWorkoutsPlansRepository();
