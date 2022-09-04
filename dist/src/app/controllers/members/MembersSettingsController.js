"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
const MembersSettingsRepository_1 = __importDefault(require("../../repositories/members/MembersSettingsRepository"));
const SettingsOptionsRepository_1 = __importDefault(require("../../repositories/settings-options/SettingsOptionsRepository"));
class MembersSettingsController {
    async index(req, res) {
        const memberSettings = await MembersSettingsRepository_1.default.findAll();
        return res.send({ memberSettings });
    }
    async store(req, res) {
        const { memberId, settingOptionId, value } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([memberId, settingOptionId, value]);
        if (someFieldIsEmpty) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram preenchidos',
                memberSetting: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res.status(400).send({
                message: 'Membro não encontrado',
                memberSetting: null,
            });
        }
        const settingOptionExists = await SettingsOptionsRepository_1.default.findById(settingOptionId);
        if (!settingOptionExists) {
            return res.status(400).send({
                message: 'Opção de configuração não encontrada',
                memberSetting: null,
            });
        }
        const memberSetting = await MembersSettingsRepository_1.default.create({
            member_id: memberId,
            settings_option_id: settingOptionId,
            value,
        });
        return res.status(200).send({ memberSetting });
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        if (Number.isNaN(id)) {
            return res.status(400).send({
                message: 'ID inválido',
                memberSetting: null,
            });
        }
        const memberSettingExists = await MembersSettingsRepository_1.default.findById(parsedId);
        if (!memberSettingExists) {
            return res.status(400).send({
                message: 'Configuração de membro não encontrada',
                memberSetting: null,
            });
        }
        return res.status(200).json({
            message: 'Configuração de membro encontrada',
            memberSetting: memberSettingExists,
        });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        if (Number.isNaN(id)) {
            return res.status(400).send({
                message: 'ID inválido',
                memberSetting: null,
            });
        }
        const memberSettingExists = await MembersSettingsRepository_1.default.findById(parsedId);
        if (!memberSettingExists) {
            return res.status(400).send({
                message: 'Configuração de membro não encontrada',
                memberSetting: null,
            });
        }
        await MembersSettingsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { memberId, settingOptionId, value } = req.body;
        if (Number.isNaN(id)) {
            return res.status(400).send({
                message: 'ID inválido',
                memberSetting: null,
            });
        }
        const memberSettingExists = await MembersSettingsRepository_1.default.findById(parsedId);
        if (!memberSettingExists) {
            return res.status(400).send({
                message: 'Configuração de membro não encontrada',
                memberSetting: null,
            });
        }
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([memberId, settingOptionId, value]);
        if (someFieldIsEmpty) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram preenchidos',
                memberSetting: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findById(memberId);
        if (!memberExists) {
            return res.status(400).send({
                message: 'Membro não encontrado',
                memberSetting: null,
            });
        }
        const settingOptionExists = await SettingsOptionsRepository_1.default.findById(settingOptionId);
        if (!settingOptionExists) {
            return res.status(400).send({
                message: 'Opção de configuração não encontrada',
                memberSetting: null,
            });
        }
        const member_id = Number.isNaN(Number(memberId))
            ? undefined
            : Number(memberId);
        const settings_option_id = Number.isNaN(Number(settingOptionExists))
            ? undefined
            : Number(memberId);
        const memberSetting = await MembersSettingsRepository_1.default.update({
            id: parsedId,
            member_id,
            settings_option_id,
            value,
        });
        return res.status(200).send({ memberSetting });
    }
}
exports.default = new MembersSettingsController();
