"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { workoutExercise } = new client_1.PrismaClient();
class WorkoutsExercisesRepository {
    async findAll() {
        const workoutsExercises = await workoutExercise.findMany();
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
}
exports.default = new WorkoutsExercisesRepository();
