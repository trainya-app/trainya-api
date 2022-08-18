"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const GymsMembersRepository_1 = __importDefault(require("../../repositories/gyms/GymsMembersRepository"));
const GymsRepository_1 = __importDefault(require("../../repositories/gyms/GymsRepository"));
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
class GymsMembersController {
    async index(req, res) {
        const gymMembers = await GymsMembersRepository_1.default.findAll();
        return res.json({ gymMembers });
    }
    async store(req, res) {
        const { gymId, memberId } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([gymId, memberId]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Insira todos os campos necessários',
                gymMember: null,
            });
        }
        const gymExists = await GymsRepository_1.default.findById(gymId);
        if (!gymExists) {
            return res
                .status(404)
                .json({ message: 'Academia não encontrada', gymMember: null });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res
                .status(404)
                .json({ message: 'Membro não encontrado', gymMember: null });
        }
        const gymMember = await GymsMembersRepository_1.default.create({
            gym_id: gymId,
            member_id: memberId,
        });
        return res
            .status(200)
            .json({ message: 'Membro da academia criado', gymMember });
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const gymMemberExists = await GymsMembersRepository_1.default.findById(parsedId);
        if (!gymMemberExists) {
            return res.status(404).json({
                message: 'Membro da academia não encontrado',
                gymMember: null,
            });
        }
        return res
            .status(200)
            .json({ message: 'Membro da academia encontrado', gymMemberExists });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const gymMemberExists = await GymsMembersRepository_1.default.findById(parsedId);
        if (!gymMemberExists) {
            return res.status(404).json({
                message: 'Membro da academia não encontrado',
                gymMember: null,
            });
        }
        await GymsMembersRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { gymId, memberId } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([gymId, memberId]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Insira todos os campos necessários',
                gymMember: null,
            });
        }
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID Inválido', gym: null });
        }
        const gymMemberExists = await GymsMembersRepository_1.default.findById(parsedId);
        if (!gymMemberExists) {
            return res.status(404).json({
                message: 'Membro da academia não encontrado',
                gymMember: null,
            });
        }
        const gymExists = await GymsRepository_1.default.findById(gymId);
        if (!gymExists) {
            return res
                .status(404)
                .json({ message: 'Academia não encontrada', gymMember: null });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res
                .status(404)
                .json({ message: 'Membro não encontrado', gymMember: null });
        }
        const gym_id = Number.isNaN(Number(gymId)) ? undefined : Number(gymId);
        const member_id = Number.isNaN(Number(memberId))
            ? undefined
            : Number(memberId);
        const updatedGymMember = await GymsMembersRepository_1.default.update(parsedId, {
            gym_id,
            member_id,
        });
        return res
            .status(200)
            .json({ message: 'Membro da academia atualizado', updatedGymMember });
    }
}
exports.default = new GymsMembersController();
