"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { employee } = new client_1.PrismaClient();
class EmployeesRepository {
    async findAll() {
        const employees = await employee.findMany({
            select: {
                id: true,
                name: true,
                birth_date: true,
                daily_workload: true,
                weekdays_workload: true,
                phone: true,
                email: true,
                password: true,
                wage: true,
                payment_date: true,
                profile_img: true,
                role_id: true,
                role: {
                    select: {
                        title: true,
                        access_level: true,
                    },
                },
            },
        });
        return employees;
    }
    async findByEmail({ email }) {
        const employeeExists = await employee.findFirst({
            where: {
                email,
            },
            include: {
                role: {
                    select: {
                        access_level: true,
                    },
                },
            },
        });
        return employeeExists;
    }
    async findById(id) {
        var _a, _b, _c;
        const employeeExists = await employee.findFirst({
            where: {
                id,
            },
            include: {
                gymEmployee: {
                    select: {
                        gym_id: true,
                        gym: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        });
        const formatted = Object.assign(Object.assign({}, employeeExists), { gymEmployee: {
                gym_id: (_a = employeeExists === null || employeeExists === void 0 ? void 0 : employeeExists.gymEmployee[0]) === null || _a === void 0 ? void 0 : _a.gym_id,
                gym: { name: (_c = (_b = employeeExists === null || employeeExists === void 0 ? void 0 : employeeExists.gymEmployee[0]) === null || _b === void 0 ? void 0 : _b.gym) === null || _c === void 0 ? void 0 : _c.name },
            } });
        return formatted;
    }
    async create({ role_id, name, birth_date, daily_workload, weekdays_workload, phone, email, password, wage, payment_date, profile_img, document, documentTypeId, gymId, }) {
        var _a;
        const createdEmployee = await employee.create({
            data: {
                role_id: Number(role_id),
                name,
                birth_date,
                phone,
                email,
                password,
                wage: Number(wage),
                payment_date: !payment_date ? undefined : payment_date,
                profile_img,
                employeeDocument: {
                    create: {
                        document_id: documentTypeId,
                        value: document,
                    },
                },
                gymEmployee: {
                    create: {
                        gym_id: gymId,
                    },
                },
            },
            select: {
                id: true,
                role_id: true,
                name: true,
                birth_date: true,
                daily_workload: true,
                weekdays_workload: true,
                phone: true,
                email: true,
                password: true,
                wage: true,
                payment_date: true,
                profile_img: true,
                role: {
                    select: {
                        title: true,
                        access_level: true,
                    },
                },
                gymEmployee: {
                    select: {
                        gym_id: true,
                    },
                },
            },
        });
        const formatted = Object.assign(Object.assign({}, createdEmployee), { gymEmployee: { gym_id: (_a = createdEmployee.gymEmployee[0]) === null || _a === void 0 ? void 0 : _a.gym_id } });
        return formatted;
    }
    async delete(id) {
        await employee.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async findPasswordById(id) {
        const password = await employee.findFirst({
            where: {
                id,
            },
            select: {
                password: true,
            },
        });
        return password;
    }
    async updatePassword({ id, password }) {
        const updatedPassword = await employee.update({
            data: {
                password,
            },
            where: {
                id,
            },
        });
        return updatedPassword;
    }
    async updateEmployee(id, { role_id, name, birth_date, daily_workload, weekdays_workload, phone, email, wage, payment_date, profile_img, }) {
        const updatedEmployee = await employee.update({
            data: {
                role_id,
                name,
                birth_date,
                daily_workload,
                weekdays_workload,
                phone,
                email,
                wage,
                payment_date,
                profile_img,
            },
            where: {
                id,
            },
        });
        return updatedEmployee;
    }
    async findIdByEmail(email) {
        const id = await employee.findFirst({
            where: {
                email,
            },
        });
        return id;
    }
}
exports.default = new EmployeesRepository();
