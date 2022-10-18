"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { employeeClass } = new client_1.PrismaClient();
class EmployeesClassesRepository {
    async findAll() {
        return await employeeClass.findMany({
            select: {
                id: true,
                class_id: true,
                class: {
                    select: {
                        title: true,
                    },
                },
                employee_id: true,
                employee: {
                    select: {
                        name: true,
                    },
                },
                comments: true,
                rating: true,
            },
        });
    }
    async create({ employee_id, class_id, rating, comments, }) {
        return await employeeClass.create({
            data: {
                employee_id,
                class_id,
                rating,
                comments,
            },
        });
    }
    async findByClassId(class_id) {
        return await employeeClass.findMany({
            where: {
                class_id,
            },
        });
    }
}
exports.default = new EmployeesClassesRepository();
