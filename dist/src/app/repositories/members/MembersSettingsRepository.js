"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { memberSetting } = new client_1.PrismaClient();
class MembersSettingsRepository {
    async findAll() {
        const memberSettings = await memberSetting.findMany();
        return memberSettings;
    }
    async create({ member_id, settings_option_id, value }) {
        const createdMemberSetting = await memberSetting.create({
            data: {
                member_id,
                settings_option_id,
                value,
            },
        });
        return createdMemberSetting;
    }
    async findById(id) {
        const memberSettingExists = await memberSetting.findFirst({
            where: {
                id,
            },
        });
        return memberSettingExists;
    }
    async delete(id) {
        const memberSettingExists = await memberSetting.delete({
            where: {
                id,
            },
        });
        return memberSettingExists;
    }
    async update({ id, member_id, settings_option_id, value, }) {
        const updatedMemberSetting = await memberSetting.update({
            where: {
                id,
            },
            data: {
                member_id,
                settings_option_id,
                value,
            },
        });
        return updatedMemberSetting;
    }
}
exports.default = new MembersSettingsRepository();
