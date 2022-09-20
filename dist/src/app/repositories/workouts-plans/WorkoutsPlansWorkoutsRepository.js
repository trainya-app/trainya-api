"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { workoutPlanWorkout } = new client_1.PrismaClient();
class WorkoutsPlansWorkoutsRepository {
    async findAll() {
        const workoutPlanWorkouts = await workoutPlanWorkout.findMany({
            select: {
                workout_id: true,
                workout: {
                    select: {
                        title: true,
                        type: true,
                    },
                },
                workouts_plan_id: true,
                workoutsPlan: {
                    select: {
                        employee_id: true,
                        employee: {
                            select: {
                                name: true,
                            },
                        },
                        workoutPlanWorkout: {
                            select: {
                                workout: {
                                    select: {
                                        title: true,
                                        type: true,
                                    },
                                },
                            },
                        },
                        goal: true,
                    },
                },
            },
        });
        return workoutPlanWorkouts;
    }
    async create({ workout_id, workouts_plan_id }) {
        const createdWorkoutPlanWorkout = await workoutPlanWorkout.create({
            data: {
                workout_id,
                workouts_plan_id,
            },
            select: {
                workout_id: true,
                workout: {
                    select: {
                        title: true,
                        type: true,
                    },
                },
                workouts_plan_id: true,
                workoutsPlan: {
                    select: {
                        employee_id: true,
                        employee: {
                            select: {
                                name: true,
                            },
                        },
                        workoutPlanWorkout: {
                            select: {
                                workout: {
                                    select: {
                                        title: true,
                                        type: true,
                                    },
                                },
                            },
                        },
                        goal: true,
                    },
                },
            },
        });
        return createdWorkoutPlanWorkout;
    }
    async delete(id) {
        await workoutPlanWorkout.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async findById(id) {
        const workoutPlanWorkoutExists = await workoutPlanWorkout.findFirst({
            where: {
                id,
            },
        });
        return workoutPlanWorkoutExists;
    }
    async update({ id, workouts_plan_id, workout_id, }) {
        const updatedWorkoutPlanWorkout = await workoutPlanWorkout.update({
            where: {
                id,
            },
            data: {
                workouts_plan_id,
                workout_id,
            },
        });
        return updatedWorkoutPlanWorkout;
    }
}
exports.default = new WorkoutsPlansWorkoutsRepository();
