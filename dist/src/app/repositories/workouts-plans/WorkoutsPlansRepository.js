"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { workoutPlan } = new client_1.PrismaClient();
class WorkoutsPlansRepository {
    async findAll() {
        const workoutPlans = await workoutPlan.findMany();
        return workoutPlans;
    }
    async create({ employee_id, goal }) {
        const createdWorkoutPlan = await workoutPlan.create({
            data: {
                employee_id,
                goal,
            },
        });
        return createdWorkoutPlan;
    }
    async findById(id) {
        const workoutPlanExists = await workoutPlan.findFirst({
            where: {
                id,
            },
        });
        return workoutPlanExists;
    }
    async delete(id) {
        await workoutPlan.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, employee_id, goal }) {
        const updatedWorkoutPlan = await workoutPlan.update({
            data: {
                employee_id,
                goal,
            },
            where: {
                id,
            },
        });
        return updatedWorkoutPlan;
    }
}
exports.default = new WorkoutsPlansRepository();
