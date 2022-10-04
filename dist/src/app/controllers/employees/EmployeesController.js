"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeesRepository_1 = __importDefault(require("../../repositories/employees/EmployeesRepository"));
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const RolesRepository_1 = __importDefault(require("../../repositories/roles/RolesRepository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const DocumentsRepository_1 = __importDefault(require("../../repositories/documents/DocumentsRepository"));
class EmployeesController {
    async index(req, res) {
        const employees = await EmployeesRepository_1.default.findAll();
        res.send({ employees });
    }
    async store(req, res) {
        const { roleName, name, birthDate, dailyWorkload, weeksdaysWorkload, phone, email, password, wage, profileImg, paymentDate, documentType, documentValue, } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            roleName,
            name,
            birthDate,
            email,
            password,
            documentType,
            documentValue,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Preencha todos os campos necessários',
                employee: null,
            });
        }
        const emailExists = await EmployeesRepository_1.default.findByEmail({ email });
        if (emailExists) {
            return res
                .status(400)
                .json({ message: 'Email já está em uso', employee: null });
        }
        const role = await RolesRepository_1.default.findByTitle({ title: roleName });
        if (!role) {
            return res
                .status(404)
                .json({ message: 'Cargo não encontrado', employee: null });
        }
        const document = await DocumentsRepository_1.default.findByName(documentType);
        const hashedPassword = await bcrypt_1.default.hash(password, 8);
        const employee = await EmployeesRepository_1.default.create({
            role_id: role === null || role === void 0 ? void 0 : role.id,
            name,
            birth_date: birthDate,
            daily_workload: dailyWorkload,
            weekdays_workload: weeksdaysWorkload,
            phone,
            email,
            password: hashedPassword,
            wage,
            profile_img: profileImg,
            payment_date: paymentDate,
            documentTypeId: document === null || document === void 0 ? void 0 : document.id,
            document: documentValue,
        });
        return res.json({
            message: 'Funcionário cadastrado com sucesso',
            employee,
        });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const employeeExists = await EmployeesRepository_1.default.findById(parsedId);
        if (!employeeExists) {
            return res
                .status(404)
                .json({ message: 'Funcionário não encontrado', employee: null });
        }
        await EmployeesRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID inválido', employee: null });
        }
        const employeeExists = await EmployeesRepository_1.default.findById(parsedId);
        if (!employeeExists) {
            return res
                .status(404)
                .json({ message: 'Funcionário não encontrado', employee: null });
        }
        return res.status(200).json({
            message: 'Funcionário encontrado',
            employee: employeeExists,
        });
    }
    async updatePassword(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { firstNewPassword, secondNewPassword } = req.body;
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID inválido', gym: null });
        }
        if (firstNewPassword !== secondNewPassword) {
            return res
                .status(400)
                .json({ message: 'As senhas não são iguais', newPassword: null });
        }
        const employeeExists = await EmployeesRepository_1.default.findById(parsedId);
        if (!employeeExists) {
            return res
                .status(404)
                .json({ message: 'Funcionário não encontrado', employee: null });
        }
        const { password } = await EmployeesRepository_1.default.findPasswordById(parsedId);
        const samePassword = await bcrypt_1.default.compare(firstNewPassword, password);
        if (samePassword) {
            return res.status(400).json({
                message: 'A senha nova não pode ser igual a antiga',
                newPassword: null,
            });
        }
        const hashedNewPassword = await bcrypt_1.default.hash(firstNewPassword, 8);
        const newPassword = await EmployeesRepository_1.default.updatePassword({
            password: hashedNewPassword,
            id: parsedId,
        });
        return res.json({ message: 'Atualizada', newPassword });
    }
    async update(req, res) {
        const { id } = req.params;
        const { roleId, name, birthDate, dailyWorkload, weeksdaysWorkload, phone, email, wage, profileImg, paymentDate, } = req.body;
        const parsedId = Number(id);
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            roleId,
            name,
            birthDate,
            dailyWorkload,
            weeksdaysWorkload,
            phone,
            email,
            wage,
            profileImg,
            paymentDate,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Preencha todos os campos necessários',
                employee: null,
            });
        }
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID Inválido', employee: null });
        }
        const employeeExists = await EmployeesRepository_1.default.findById(parsedId);
        if (!employeeExists) {
            return res
                .status(404)
                .json({ message: 'Funcionário não encontrado', employee: null });
        }
        const daily_workload = Number.isNaN(Number(dailyWorkload))
            ? undefined
            : Number(dailyWorkload);
        const weekdays_workload = Number.isNaN(Number(weeksdaysWorkload))
            ? undefined
            : Number(weeksdaysWorkload);
        const vWage = Number.isNaN(Number(wage))
            ? undefined
            : Number(weeksdaysWorkload);
        const emailExists = await EmployeesRepository_1.default.findByEmail(email);
        if (emailExists) {
            const idByEmail = await EmployeesRepository_1.default.findIdByEmail(email);
            let id = idByEmail.id;
            if (id != parsedId) {
                return res
                    .status(400)
                    .json({ message: 'Email já está em uso', employee: null });
            }
        }
        const updatedEmployee = await EmployeesRepository_1.default.updateEmployee(parsedId, {
            role_id: roleId,
            name,
            birth_date: birthDate,
            daily_workload,
            weekdays_workload,
            phone,
            email,
            wage: vWage,
            profile_img: profileImg,
            payment_date: paymentDate,
        });
        return res.json({ message: 'Dados atualizados!', updatedEmployee });
    }
}
exports.default = new EmployeesController();
