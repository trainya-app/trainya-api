import { PrismaClient } from '@prisma/client';
const { memberSetting } = new PrismaClient();

interface IMemberSetting {
  member_id: number;
  settings_option_id: number;
  value: string;
}
class MembersSettingsRepository {
  async findAll() {
    const memberSettings = await memberSetting.findMany();
    return memberSettings;
  }

  async create({ member_id, settings_option_id, value }: IMemberSetting) {
    const createdMemberSetting = await memberSetting.create({
      data: {
        member_id,
        settings_option_id,
        value,
      },
    });
    return createdMemberSetting;
  }

  async findById(id: number) {
    const memberSettingExists = await memberSetting.findFirst({
      where: {
        id,
      },
    });
    return memberSettingExists;
  }
}

export default new MembersSettingsRepository();
