"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { workout } = new client_1.PrismaClient();
class WorkoutsRepository {
    async findAll() {
        const workouts = await workout.findMany();
        return workouts;
    }
    async findByTitle(title) {
        const titleExists = await workout.findFirst({
            where: {
                title,
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
        });
        return createdWorkout;
    }
    async findById(id) {
        const workoutExists = await workout.findFirst({
            where: {
                id,
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
