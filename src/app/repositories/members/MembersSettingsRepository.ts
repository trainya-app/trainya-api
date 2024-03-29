import { PrismaClient } from '@prisma/client';
const { memberSetting } = new PrismaClient();

interface IMemberSetting {
  member_id: number;
  settings_option_id: number;
  value: string;
}

interface IUpdateMemberSetting {
  id: number;
  member_id?: number;
  settings_option_id?: number;
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

  async delete(id: number) {
    const memberSettingExists = await memberSetting.delete({
      where: {
        id,
      },
    });
    return memberSettingExists;
  }

  async update({
    id,
    member_id,
    settings_option_id,
    value,
  }: IUpdateMemberSetting) {
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

export default new MembersSettingsRepository();
