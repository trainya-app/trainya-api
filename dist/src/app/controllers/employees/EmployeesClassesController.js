"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeesClassesRepository_1 = __importDefault(require("../../repositories/employees/EmployeesClassesRepository"));
class EmployeesClassesController {
    async index(req, res) {
        const employeesClasses = await EmployeesClassesRepository_1.default.findAll();
        return res.send({ employeesClasses });
    }
    async store(req, res) {
        const { employee_id, class_id, rating, comments } = req.body;
        const createdEmployeeClass = await EmployeesClassesRepository_1.default.create({
            employee_id,
            class_id,
            rating,
            comments,
        });
        return res.status(200).json({ message: 'Criado', createdEmployeeClass });
    }
}
exports.default = new EmployeesClassesController();
