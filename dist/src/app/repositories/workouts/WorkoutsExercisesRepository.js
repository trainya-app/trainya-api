"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { workoutExercise } = new client_1.PrismaClient();
class WorkoutsExercisesRepository {
    async findAll() {
        const workoutsExercises = await workoutExercise.findMany({
            select: {
                workout_id: true,
                workout: {
                    select: {
                        title: true,
                        type: true,
                    },
                },
                exercise_id: true,
                exercise: {
                    select: {
                        name: true,
                        comment: true,
                    },
                },
            },
        });
        return workoutsExercises;
    }
    async create({ workout_id, exercise_id, sets, repetitions, duration, }) {
        const createdWorkoutExercise = await workoutExercise.create({
            data: {
                workout_id,
                exercise_id,
                sets,
                repetitions,
                duration,
            },
            select: {
                workout_id: true,
                workout: {
                    select: {
                        title: true,
                        type: true,
                    },
                },
                exercise_id: true,
                exercise: {
                    select: {
                        name: true,
                        comment: true,
                    },
                },
            },
        });
        return createdWorkoutExercise;
    }
    async findById(id) {
        const workoutExerciseExists = await workoutExercise.findFirst({
            where: {
                id,
            },
        });
        return workoutExerciseExists;
    }
    async delete(id) {
        await workoutExercise.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, workout_id, exercise_id, sets, repetitions, duration, }) {
        const updatedWorkoutExercise = await workoutExercise.update({
            data: {
                workout_id,
                exercise_id,
                sets,
                repetitions,
                duration,
            },
            where: {
                id,
            },
        });
        return updatedWorkoutExercise;
    }
    async deleteByWorkoutId(workoutId) {
        await workoutExercise.deleteMany({
            where: {
                workout_id: workoutId,
            },
        });
    }
    async deleteByExerciseId(exerciseId) {
        await workoutExercise.deleteMany({
            where: {
                exercise_id: exerciseId,
            },
        });
    }
}
exports.default = new WorkoutsExercisesRepository();
