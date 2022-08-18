"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const GymsEmployeesRepository_1 = __importDefault(require("../../repositories/gyms/GymsEmployeesRepository"));
const GymsRepository_1 = __importDefault(require("../../repositories/gyms/GymsRepository"));
const EmployeesRepository_1 = __importDefault(require("../../repositories/employees/EmployeesRepository"));
class GymsEmployeesController {
    async index(req, res) {
        const gymEmployees = await GymsEmployeesRepository_1.default.findAll();
        return res.send({ gymEmployees });
    }
    async store(req, res) {
        const { gymId, employeeId } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([gymId, employeeId]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados.',
                gymEmployee: null,
            });
        }
        const gymExists = await GymsRepository_1.default.findById(gymId);
        if (!gymExists) {
            return res
                .status(404)
                .json({ message: 'Academia não encontrada', gymEmployee: null });
        }
        const employeeExists = await EmployeesRepository_1.default.findById(employeeId);
        if (!employeeExists) {
            return res
                .status(404)
                .json({ message: 'Funcionário não encontrado', gymEmployee: null });
        }
        const gymEmployee = await GymsEmployeesRepository_1.default.create({
            gym_id: gymId,
            employee_id: employeeId,
        });
        return res.json({
            message: 'Funcionário da academia cadastrado.',
            gymEmployee,
        });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const gymEmployeeExists = await GymsEmployeesRepository_1.default.findById(parsedId);
        if (!gymEmployeeExists) {
            return res.status(404).json({
                message: ' Funcionário da academia não encontrados',
                gymEmployee: null,
            });
        }
        await GymsEmployeesRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const gymEmployeeExists = await GymsEmployeesRepository_1.default.findById(parsedId);
        if (!gymEmployeeExists) {
            return res.status(404).json({
                message: ' Funcionário da academia não encontrado',
                gymEmployee: null,
            });
        }
        return res.status(200).json({
            message: 'Funcinário da academia encontrado.',
            gymEmployeeExists,
        });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { gymId, employeeId } = req.body;
        const gymEmployeeExists = await GymsEmployeesRepository_1.default.findById(parsedId);
        if (!gymEmployeeExists) {
            return res
                .status(404)
                .json({
                message: 'Funcionário da academia não encontrado',
                gymEmployee: null,
            });
        }
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([gymId, employeeId]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Insira todos os campos obrigatórios',
                gymEmployee: null,
            });
        }
        const gymExists = await GymsRepository_1.default.findById(gymId);
        if (!gymExists) {
            return res
                .status(404)
                .json({ message: 'Academia não encontrada', gymEmployee: null });
        }
        const employeeExists = await EmployeesRepository_1.default.findById(employeeId);
        if (!employeeExists) {
            return res
                .status(404)
                .json({ message: 'Funcionário não encontrado', gymEmployee: null });
        }
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID Inválido', gym: null });
        }
        const gym_id = Number.isNaN(Number(gymId)) ? undefined : Number(gymId);
        const employee_id = Number.isNaN(Number(employeeId))
            ? undefined
            : Number(employeeId);
        const gymEmployee = await GymsEmployeesRepository_1.default.update({
            id: parsedId,
            gym_id,
            employee_id,
        });
        return res.status(200).json({ message: 'Dados atualizados', gymEmployee });
    }
}
exports.default = new GymsEmployeesController();
