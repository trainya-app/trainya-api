"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { exercise } = new client_1.PrismaClient();
class ExercisesRepository {
    async findAll() {
        const exercises = await exercise.findMany({
            select: {
                id: true,
                name: true,
                comment: true,
                needs_equipment: true,
                video_url: true,
            },
        });
        return exercises;
    }
    async findByName(name) {
        const nameExists = await exercise.findFirst({
            where: {
                name,
            },
        });
        return nameExists;
    }
    async store({ name, comment, needs_equipment, video_url }) {
        const createdExercise = await exercise.create({
            data: {
                name,
                comment,
                needs_equipment,
                video_url,
            },
            select: {
                id: true,
                name: true,
                comment: true,
                needs_equipment: true,
                video_url: true,
            },
        });
        return createdExercise;
    }
    async findById(id) {
        const exerciseExists = await exercise.findFirst({
            where: {
                id,
            },
        });
        return exerciseExists;
    }
    async delete(id) {
        await exercise.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, name, comment, needs_equipment, video_url }) {
        const updatedExercise = await exercise.update({
            where: {
                id,
            },
            data: {
                name,
                comment,
                needs_equipment,
                video_url
            },
        });
        return updatedExercise;
    }
}
exports.default = new ExercisesRepository();
