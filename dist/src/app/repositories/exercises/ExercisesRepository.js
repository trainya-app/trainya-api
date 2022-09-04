"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { exercise } = new client_1.PrismaClient();
class ExercisesRepository {
    async findAll() {
        const exercises = await exercise.findMany();
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
    async store({ name, comment, needs_equipment }) {
        const createdExercise = await exercise.create({
            data: {
                name,
                comment,
                needs_equipment,
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
    async update({ id, name, comment, needs_equipment }) {
        const updatedExercise = await exercise.update({
            where: {
                id,
            },
            data: {
                name,
                comment,
                needs_equipment,
            },
        });
        return updatedExercise;
    }
}
exports.default = new ExercisesRepository();
