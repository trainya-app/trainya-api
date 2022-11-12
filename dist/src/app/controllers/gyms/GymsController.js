"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const GymsRepository_1 = __importDefault(require("../../repositories/gyms/GymsRepository"));
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
const GymsMembersRepository_1 = __importDefault(require("../../repositories/gyms/GymsMembersRepository"));
const MemberMonthsDayProgressRepository_1 = __importDefault(require("../../repositories/members/MemberMonthsDayProgressRepository"));
const EmployeesRepository_1 = __importDefault(require("../../repositories/employees/EmployeesRepository"));
class GymsController {
    async index(req, res) {
        const gyms = await GymsRepository_1.default.findAll();
        return res.send({ gyms });
    }
    async store(req, res) {
        const { name, email, password, state, city, street, adressNumber, zipCode, maxCapacity, currentCapacity, } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            name,
            email,
            password,
            state,
            city,
            street,
            adressNumber,
            zipCode,
            maxCapacity,
            currentCapacity,
        ]);
        if (someFieldIsEmpty) {
            res.status(400).json({
                message: 'Campos obrigatórios não foram enviados.',
                gym: null,
            });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 8);
        const emailExists = await GymsRepository_1.default.findByEmail({ email });
        if (emailExists) {
            return res
                .status(400)
                .json({ message: 'Email já cadastrado', gym: null });
        }
        const gym = await GymsRepository_1.default.create({
            name,
            email,
            password: hashedPassword,
            state,
            city,
            street,
            adress_number: Number(adressNumber),
            zip_code: Number(zipCode),
            max_capacity: maxCapacity,
            current_capacity: currentCapacity,
        });
        if (gym === null) {
            return res
                .status(400)
                .json({ message: 'Valores inválidos para criação da academia.' });
        }
        const hashedPasswordEmployee = await bcrypt_1.default.hash(password, 8);
        await EmployeesRepository_1.default.createWithGym({
            name,
            email,
            password: hashedPasswordEmployee,
            gymId: gym.id,
        });
        return res.json({ message: 'Academia Criada ', gym });
    }
    async updatePassword(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { firstNewPassword, secondNewPassword } = req.body;
        if (firstNewPassword !== secondNewPassword) {
            return res
                .status(400)
                .json({ message: 'As senhas não são iguais', newPassword: null });
        }
        const gymExists = await GymsRepository_1.default.findById(parsedId);
        if (!gymExists) {
            return res.status(404).json({ message: 'Academia não encontrada' });
        }
        const { password } = await GymsRepository_1.default.findPasswordById(parsedId);
        const samePassword = await bcrypt_1.default.compare(firstNewPassword, password);
        if (samePassword) {
            return res.status(400).json({
                message: 'A senha nova não pode ser igual a antiga',
                newPassword: null,
            });
        }
        const hashedNewPassword = await bcrypt_1.default.hash(firstNewPassword, 8);
        const newPassword = await GymsRepository_1.default.updatePassword(hashedNewPassword, parsedId);
        return res.json({ message: 'Atualizada', newPassword });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const gymExists = await GymsRepository_1.default.findById(parsedId);
        if (!gymExists) {
            return res.status(404).json({ message: 'Academia não encontrada' });
        }
        await GymsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID inválido', gym: null });
        }
        const gym = await GymsRepository_1.default.findById(parsedId);
        if (!gym) {
            return res
                .status(404)
                .send({ message: 'Academia não encontrada', gym: null });
        }
        // lógica pra pegar quantidade de membros com o at_gym como true
        const membersAtGym = await GymsMembersRepository_1.default.getMembersAtGym({
            gym_id: gym === null || gym === void 0 ? void 0 : gym.id,
        });
        const newGym = Object.assign(Object.assign({}, gym), { current_capacity: membersAtGym });
        return res
            .status(200)
            .json({ message: 'Academia encontrada', gym: newGym });
    }
    async update(req, res) {
        const { id } = req.params;
        const { name, email, state, city, street, adressNumber, zipCode, maxCapacity, currentCapacity, } = req.body;
        const parsedId = Number(id);
        const gymExists = await GymsRepository_1.default.findById(parsedId);
        if (!gymExists) {
            return res
                .status(404)
                .json({ message: 'Academia não encontrada', gym: null });
        }
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID Inválido', gym: null });
        }
        const emailExists = await GymsRepository_1.default.findByEmail(email);
        if (emailExists) {
            const idByEmail = await GymsRepository_1.default.findIdByEmail(email);
            let id = idByEmail.id;
            if (id != parsedId) {
                return res
                    .status(400)
                    .json({ message: 'Email já está em uso', gym: null });
            }
        }
        const adress_number = Number.isNaN(Number(adressNumber))
            ? undefined
            : Number(adressNumber);
        const zip_code = Number.isNaN(Number(zipCode))
            ? undefined
            : Number(zipCode);
        const max_capacity = Number.isNaN(Number(maxCapacity))
            ? undefined
            : Number(maxCapacity);
        const current_capacity = Number.isNaN(Number(currentCapacity))
            ? undefined
            : Number(zipCode);
        const updatedGym = await GymsRepository_1.default.updateGym({
            id: parsedId,
            name,
            email,
            state,
            city,
            street,
            adress_number,
            zip_code,
            current_capacity,
            max_capacity,
        });
        return res.json({ message: 'Dados atualizados!', updatedGym });
    }
    async updateCapacity(req, res) {
        const { gymId, memberId, monthId } = req.params;
        const parsedGymId = Number(gymId);
        const parsedMemberId = Number(memberId);
        const parsedMonthId = Number(monthId);
        const gymExists = await GymsRepository_1.default.findById(parsedGymId);
        if (!gymExists) {
            return res
                .status(404)
                .json({ message: 'Academia não encontrada', currentCapacity: null });
        }
        const memberExists = await MembersRepository_1.default.findById(parsedMemberId);
        if (!memberExists) {
            return res.status(404).json({
                message: 'Membro não encontrado',
                currentCapacity: gymExists.current_capacity,
            });
        }
        const currentCapacity = gymExists === null || gymExists === void 0 ? void 0 : gymExists.current_capacity;
        if (memberExists.at_gym === false) {
            const makeCapacity = currentCapacity + 1;
            const updatedCapacity = await GymsRepository_1.default.updateCurrentCapacity({
                id: parsedGymId,
                current_capacity: makeCapacity,
            });
            const updatedMember = await MembersRepository_1.default.updateAtGym({
                inGym: true,
                id: parsedMemberId,
            });
            const progress = await MemberMonthsDayProgressRepository_1.default.findByMemberAndMonthId({
                member_id: parsedMemberId,
                month_id: parsedMonthId,
            });
            let updatedProgress;
            if (progress) {
                const newCurrentProgress = progress.current_progress + 1;
                updatedProgress =
                    await MemberMonthsDayProgressRepository_1.default.updateProgress({
                        id: progress.id,
                        current_progress: newCurrentProgress,
                    });
            }
            return res.status(200).json({
                message: 'Entrada registrada',
                updatedCapacity,
                updatedMember,
                updatedProgress,
            });
        }
        if (memberExists.at_gym === true) {
            const makeCapacity = currentCapacity - 1;
            const updatedCapacity = await GymsRepository_1.default.updateCurrentCapacity({
                id: parsedGymId,
                current_capacity: makeCapacity,
            });
            const updatedMember = await MembersRepository_1.default.updateAtGym({
                inGym: false,
                id: parsedMemberId,
            });
            return res
                .status(200)
                .json({ message: 'Saída registrada', updatedCapacity, updatedMember });
        }
    }
    async showByMember(req, res) {
        const memberId = req.userId;
        const gym = await GymsMembersRepository_1.default.findByMember(memberId);
        return res.status(200).json({ message: 'Academia encontrada', gym });
    }
}
exports.default = new GymsController();
