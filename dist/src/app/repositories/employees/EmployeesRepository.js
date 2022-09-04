"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { employee } = new client_1.PrismaClient();
class EmployeesRepository {
    async findAll() {
        const employees = await employee.findMany();
        return employees;
    }
    async findByEmail({ email }) {
        const employeeExists = await employee.findFirst({
            where: {
                email,
            },
        });
        return employeeExists;
    }
    async findById(id) {
        const employeeExists = await employee.findFirst({
            where: {
                id,
            },
        });
        return employeeExists;
    }
    async create({ role_id, name, birth_date, daily_workload, weekdays_workload, phone, email, password, wage, payment_date, profile_img, }) {
        const createdEmployee = await employee.create({
            data: {
                role_id,
                name,
                birth_date,
                daily_workload,
                weekdays_workload,
                phone,
                email,
                password,
                wage,
                payment_date,
                profile_img,
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
            },
        });
        return createdEmployee;
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
