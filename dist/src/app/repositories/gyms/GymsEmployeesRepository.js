"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { gymEmployee } = new client_1.PrismaClient();
class GymsEmployeesRepository {
    async findAll() {
        const gymEmployees = await gymEmployee.findMany();
        return gymEmployees;
    }
    async create({ gym_id, employee_id }) {
        const createdGymEmployee = await gymEmployee.create({
            data: {
                gym_id,
                employee_id,
            },
        });
        return createdGymEmployee;
    }
    async findById(id) {
        const gymEmployeeExists = await gymEmployee.findFirst({
            where: {
                id,
            },
        });
        return gymEmployeeExists;
    }
    async delete(id) {
        await gymEmployee.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async update({ id, gym_id, employee_id }) {
        const updatedGymEmployee = await gymEmployee.update({
            data: {
                gym_id,
                employee_id,
            },
            where: {
                id,
            },
        });
        return updatedGymEmployee;
    }
}
exports.default = new GymsEmployeesRepository();
