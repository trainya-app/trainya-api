"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const bcrypt_1 = __importDefault(require("bcrypt"));
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
const MembersWorkoutsPlansRepository_1 = __importDefault(require("../../repositories/members/MembersWorkoutsPlansRepository"));
const MemberMonthsDayProgressRepository_1 = __importDefault(require("../../repositories/members/MemberMonthsDayProgressRepository"));
const GymsMembersRepository_1 = __importDefault(require("../../repositories/gyms/GymsMembersRepository"));
const ClassesRepository_1 = __importDefault(require("../../repositories/classes/ClassesRepository"));
const MembersClassesRepository_1 = __importDefault(require("../../repositories/members/MembersClassesRepository"));
class MembersController {
    async index(req, res) {
        const members = await MembersRepository_1.default.findAll();
        return res.json({ members });
    }
    async store(req, res) {
        const { phone, name, weight, height, email, password, state, city, street, adressNumber, birthDate, avatarUrl, } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            phone,
            name,
            weight,
            height,
            email,
            password,
            state,
            city,
            street,
            adressNumber,
            avatarUrl,
        ]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram inseridos',
                member: null,
            });
        }
        const emailExists = await MembersRepository_1.default.findByEmail({ email });
        if (emailExists) {
            return res
                .status(400)
                .json({ message: 'Email já está em uso', member: null });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 8);
        const member = await MembersRepository_1.default.create({
            phone,
            name,
            weight,
            height,
            email,
            password: hashedPassword,
            state,
            city,
            street,
            adress_number: adressNumber,
            birth_date: birthDate,
            avatar_url: avatarUrl,
        });
        if (member == null) {
            return res.status(400).json({
                message: 'Não foi possivel criar o membro',
                member: null,
            });
        }
        await MemberMonthsDayProgressRepository_1.default.createForAllMonths(member.id);
        return res.status(200).json({ message: 'Membro criado', member });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberExists = await MembersRepository_1.default.findById(parsedId);
        if (!memberExists) {
            return res
                .status(404)
                .json({ message: 'Membro não encontrado', member: null });
        }
        await MembersRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const memberExists = await MembersRepository_1.default.findById(parsedId);
        if (!memberExists) {
            return res
                .status(404)
                .json({ message: 'Membro não encontrado', member: null });
        }
        return res
            .status(200)
            .json({ message: 'Membro encontrado', member: memberExists });
    }
    async updatePassword(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { firstNewPassword, secondNewPassword } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([firstNewPassword, secondNewPassword]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                password: null,
            });
        }
        if (firstNewPassword !== secondNewPassword) {
            return res
                .status(400)
                .json({ message: 'As senhas não são iguais', newPassword: null });
        }
        const memberExists = await MembersRepository_1.default.findById(parsedId);
        if (!memberExists) {
            return res
                .status(404)
                .json({ message: 'Membro não encontrado', member: null });
        }
        const { password } = await MembersRepository_1.default.findPasswordById(parsedId);
        const samePassword = await bcrypt_1.default.compare(firstNewPassword, password);
        if (samePassword) {
            return res.status(400).json({
                message: 'A senha nova não pode ser igual a antiga',
                newPassword: null,
            });
        }
        const hashedNewPassword = await bcrypt_1.default.hash(firstNewPassword, 8);
        const newPassword = await MembersRepository_1.default.updatePassword(parsedId, hashedNewPassword);
        return res.json({ message: 'Atualizada', newPassword });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { phone, name, weight, height, email, password, state, city, street, adressNumber, birthDate, } = req.body;
        const memberExists = await MembersRepository_1.default.findById(parsedId);
        if (!memberExists) {
            return res
                .status(404)
                .json({ message: 'Membro não encontrado', member: null });
        }
        const emailExists = await MembersRepository_1.default.findByEmail(email);
        if (emailExists) {
            const idByEmail = await MembersRepository_1.default.findIdByEmail(email);
            let id = idByEmail.id;
            if (id != parsedId) {
                return res
                    .status(400)
                    .json({ message: 'Email já está em uso', member: null });
            }
        }
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID Inválido', member: null });
        }
        const vWeight = Number.isNaN(Number(weight)) ? undefined : Number(weight);
        const vHeight = Number.isNaN(Number(height)) ? undefined : Number(height);
        const updatedMember = await MembersRepository_1.default.updateMember({
            id: parsedId,
            phone,
            name,
            weight: vWeight,
            height: vHeight,
            email,
            password,
            state,
            city,
            street,
            adress_number: adressNumber,
            birth_date: birthDate,
        });
        return res.json({ message: 'Dados atualizados!', updatedMember });
    }
    async uploadAvatar(req, res) {
        const memberId = req.userId;
        const parsedId = Number(memberId);
        const avatar_url = req.firebaseUrl;
        const memberExists = await MembersRepository_1.default.findById(parsedId);
        if (!memberExists) {
            return res
                .status(404)
                .json({ message: 'Membro não encontrado', member: null });
        }
        const updatedMember = await MembersRepository_1.default.updateAvatar({
            id: Number(memberId),
            avatar_url,
        });
        return res
            .status(200)
            .json({ message: 'Avatar atualizado', updatedMember });
    }
    async showWorkouts(req, res) {
        const memberId = req.userId;
        const memberWorkouts = await MembersWorkoutsPlansRepository_1.default.findByMemberId(memberId);
        if (!memberWorkouts) {
            return res.status(404).json({
                message: 'Você ainda não possui planos de treino',
                memberWorkouts: null,
            });
        }
        return res
            .status(200)
            .json({ message: 'Planos de treino', memberWorkouts });
    }
    async showClassesByGym(req, res) {
        const member_id = req.userId;
        const gym_id = await GymsMembersRepository_1.default.findByMember(member_id);
        const gymClasses = await ClassesRepository_1.default.findByGym(Number(gym_id === null || gym_id === void 0 ? void 0 : gym_id.gym_id));
        return res.status(200).json({ message: 'Aulas encontradas', gymClasses });
    }
    async showClassesByMember(req, res) {
        const member_id = req.userId;
        const classes = await MembersClassesRepository_1.default.findByMember(member_id);
        return res.status(200).json({ message: 'Aulas encontradas', classes });
    }
}
exports.default = new MembersController();
