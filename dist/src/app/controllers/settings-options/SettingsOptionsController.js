"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const SettingsOptionsRepository_1 = __importDefault(require("../../repositories/settings-options/SettingsOptionsRepository"));
class SettingsOptionsController {
    async index(req, res) {
        const settingsOptions = await SettingsOptionsRepository_1.default.findAll();
        return res.send({ settingsOptions });
    }
    async store(req, res) {
        const { description } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([description]);
        if (someFieldIsEmpty) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram enviados',
                settingOption: null,
            });
        }
        const settingOptionExists = await SettingsOptionsRepository_1.default.findByDescription({ description });
        if (settingOptionExists) {
            return res.status(400).send({
                message: 'Opção de configuração já cadastrada',
                settingOption: null,
            });
        }
        const settingOption = await SettingsOptionsRepository_1.default.create({
            description,
        });
        return res
            .status(200)
            .json({ message: 'Opção de configuração cadastrada', settingOption });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const settingOption = await SettingsOptionsRepository_1.default.findById(parsedId);
        if (!settingOption) {
            return res.status(400).send({
                message: 'Opção de configuração não encontrada',
                settingOption: null,
            });
        }
        await SettingsOptionsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const settingOption = await SettingsOptionsRepository_1.default.findById(parsedId);
        if (!settingOption) {
            return res.status(400).send({
                message: 'Opção de configuração não encontrada',
                settingOption: null,
            });
        }
        return res.send({ settingOption });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { description } = req.body;
        const settingOptionExists = await SettingsOptionsRepository_1.default.findById(parsedId);
        if (!settingOptionExists) {
            return res.status(400).send({
                message: 'Opção de configuração não encontrada',
                settingOption: null,
            });
        }
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([description]);
        if (someFieldIsEmpty) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram enviados',
                settingOption: null,
            });
        }
        const descriptionExists = await SettingsOptionsRepository_1.default.findByDescription({ description });
        if (descriptionExists) {
            const idByDescription = await SettingsOptionsRepository_1.default.findIdByDescription({ description });
            let id = idByDescription.id;
            if (id != parsedId) {
                return res.status(400).send({
                    message: 'Opção de configuração já cadastrada',
                    settingOption: null,
                });
            }
        }
        const settingOption = await SettingsOptionsRepository_1.default.update({
            id: parsedId,
            description,
        });
        return res
            .status(200)
            .json({ message: 'Opção de configuração atualizada', settingOption });
    }
}
exports.default = new SettingsOptionsController();
