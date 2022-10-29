"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const MemberPhotoProgressRepository_1 = __importDefault(require("../../repositories/members/MemberPhotoProgressRepository"));
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
class MemberPhotoProgressController {
    async index(req, res) {
        const memberPhotoProgresses = await MemberPhotoProgressRepository_1.default.findAll();
        return res.send({ message: 'Encontrados', memberPhotoProgresses });
    }
    async store(req, res) {
        const memberId = req.userId;
        const { firstPhoto, secondPhoto, thirdPhoto, monthId } = req.body;
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res.status(400).send({
                message: 'Membro não encontrado',
                memberSetting: null,
            });
        }
        const createdMemberPhotoProgress = await MemberPhotoProgressRepository_1.default.create({ member_id: memberId, month_id: monthId });
        return res.status(200).json({ message: "Criado", createdMemberPhotoProgress });
    }
    async uploadFirstPhoto(req, res) {
        const memberId = req.userId;
        const firstPhoto_url = req.firebaseUrl;
        // const { monthId } = req.body;
        const monthId = 1;
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res.status(400).send({
                message: 'Membro não encontrado',
                memberSetting: null,
            });
        }
        const memberPhotoProgress = await MemberPhotoProgressRepository_1.default.findByMemberAndMonth({ member_id: memberId, month_id: monthId });
        if (!memberPhotoProgress) {
            return res.status(404).json({ message: "Progresso não encontrado", memberPhotoProgress: null });
        }
        const updatedMemberPhotoProgress = await MemberPhotoProgressRepository_1.default.putFirstPhoto({ firstPhoto_url, id: memberPhotoProgress.id });
        return res.status(200).json({ message: 'Foto atualizada', updatedMemberPhotoProgress });
    }
    async uploadSecondPhoto(req, res) {
        const memberId = req.userId;
        const secondPhoto_url = req.firebaseUrl;
        // const { monthId } = req.body;
        const monthId = 1;
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res.status(400).send({
                message: 'Membro não encontrado',
                memberSetting: null,
            });
        }
        const memberPhotoProgress = await MemberPhotoProgressRepository_1.default.findByMemberAndMonth({ member_id: memberId, month_id: monthId });
        if (!memberPhotoProgress) {
            return res.status(404).json({ message: "Progresso não encontrado", memberPhotoProgress: null });
        }
        const updatedMemberPhotoProgress = await MemberPhotoProgressRepository_1.default.putSecondPhoto({ secondPhoto_url, id: memberPhotoProgress.id });
        return res.status(200).json({ message: 'Foto atualizada', updatedMemberPhotoProgress });
    }
    async uploadThirdPhoto(req, res) {
        const memberId = req.userId;
        const thirdPhoto_url = req.firebaseUrl;
        // const { monthId } = req.body;
        const monthId = 1;
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res.status(400).send({
                message: 'Membro não encontrado',
                memberSetting: null,
            });
        }
        const memberPhotoProgress = await MemberPhotoProgressRepository_1.default.findByMemberAndMonth({ member_id: memberId, month_id: monthId });
        if (!memberPhotoProgress) {
            return res.status(404).json({ message: "Progresso não encontrado", memberPhotoProgress: null });
        }
        const updatedMemberPhotoProgress = await MemberPhotoProgressRepository_1.default.putThirdPhoto({ thirdPhoto_url, id: memberPhotoProgress.id });
        return res.status(200).json({ message: 'Foto atualizada', updatedMemberPhotoProgress });
    }
    async showByMember(req, res) {
        const member_id = req.userId;
        const memberExists = await MembersRepository_1.default.findById(member_id);
        if (!memberExists) {
            return res.status(400).send({
                message: 'Membro não encontrado',
                memberSetting: null,
            });
        }
        const memberPhotosProgress = await MemberPhotoProgressRepository_1.default.findByMember(member_id);
        return res.status(200).json({ message: 'Fotos encontradas', memberPhotosProgress });
    }
    async showByMemberAndMonth(req, res) {
        const memberId = req.userId;
        const { monthId } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([monthId]);
        if (someFieldIsEmpty) {
            return res.status(400).json({ message: "Preencha todos os campos", memberPhotoProgress: null });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res.status(400).send({
                message: 'Membro não encontrado',
                memberSetting: null,
            });
        }
        const memberPhotoProgress = await MemberPhotoProgressRepository_1.default.findByMemberAndMonth({ member_id: memberId, month_id: monthId });
        return res.status(200).json({ message: 'Fotos encontradas', memberPhotoProgress });
    }
}
exports.default = new MemberPhotoProgressController();
