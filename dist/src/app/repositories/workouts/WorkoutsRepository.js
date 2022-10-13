"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { workout } = new client_1.PrismaClient();
class WorkoutsRepository {
    async findAll() {
        const workouts = await workout.findMany({
            include: {
                workoutExercise: {
                    select: {
                        id: true,
                        sets: true,
                        repetitions: true,
                        duration: true,
                        exercise: {
                            select: {
                                id: true,
                                name: true,
                                comment: true,
                            },
                        },
                    },
                },
            },
        });
        return workouts;
    }
    async findByTitle(title) {
        const titleExists = await workout.findFirst({
            where: {
                title,
            },
            include: {
                workoutExercise: {
                    select: {
                        id: true,
                        sets: true,
                        repetitions: true,
                        duration: true,
                        exercise: {
                            select: {
                                id: true,
                                name: true,
                                comment: true,
                            },
                        },
                    },
                },
            },
        });
        return titleExists;
    }
    async create({ employee_id, title, description, type, preview_image_url, video_url, level, duration, }) {
        const createdWorkout = await workout.create({
            data: {
                employee_id,
                title,
                description,
                type,
                preview_image_url,
                video_url,
                level,
                duration,
            },
            select: {
                id: true,
                employee_id: true,
                employee: {
                    select: {
                        name: true,
                    },
                },
                title: true,
                description: true,
                type: true,
                duration: true,
                level: true,
                preview_image_url: true,
                video_url: true,
            },
        });
        return createdWorkout;
    }
    async findById(id) {
        const workoutExists = await workout.findFirst({
            where: {
                id,
            },
            include: {
                workoutExercise: {
                    select: {
                        id: true,
                        sets: true,
                        repetitions: true,
                        duration: true,
                        exercise: {
                            select: {
                                id: true,
                                name: true,
                                comment: true,
                            },
                        },
                    },
                },
            },
        });
        return workoutExists;
    }
    async delete(id) {
        await workout.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, employee_id, title, description, type, preview_image_url, video_url, level, duration, }) {
        const updatedWorkout = await workout.update({
            where: {
                id,
            },
            data: {
                employee_id,
                title,
                description,
                type,
                preview_image_url,
                video_url,
                level,
                duration,
            },
        });
        return updatedWorkout;
    }
}
exports.default = new WorkoutsRepository();
