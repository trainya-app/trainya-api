"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { settingOption } = new client_1.PrismaClient();
class SettingsOptionsRepository {
    async findAll() {
        const settingsOptions = await settingOption.findMany();
        return settingsOptions;
    }
    async findByDescription({ description }) {
        const settingOptionExists = await settingOption.findFirst({
            where: { description },
        });
        return settingOptionExists;
    }
    async create({ description }) {
        const createdSettingOption = await settingOption.create({
            data: { description },
        });
        return createdSettingOption;
    }
    async findById(id) {
        const settingOptionExists = await settingOption.findFirst({
            where: { id },
        });
        return settingOptionExists;
    }
    async delete(id) {
        await settingOption.delete({ where: { id } });
        return true;
    }
    async update({ id, description }) {
        const updatedSettingOption = await settingOption.update({
            where: {
                id,
            },
            data: {
                description,
            },
        });
        return updatedSettingOption;
    }
    async findIdByDescription({ description }) {
        const id = await settingOption.findFirst({
            where: { description },
        });
        return id;
    }
}
exports.default = new SettingsOptionsRepository();
