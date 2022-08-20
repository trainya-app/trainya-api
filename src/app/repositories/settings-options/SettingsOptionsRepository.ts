import { PrismaClient } from '@prisma/client';
const { settingOption } = new PrismaClient();

interface ISettingOption {
  description: string;
}

class SettingsOptionsRepository {
  async findAll() {
    const settingsOptions = await settingOption.findMany();
    return settingsOptions;
  }

  async findByDescription({ description }: ISettingOption) {
    const settingOptionExists = await settingOption.findFirst({
      where: { description },
    });
    return settingOptionExists;
  }

  async create({ description }: ISettingOption) {
    const createdSettingOption = await settingOption.create({
      data: { description },
    });
    return createdSettingOption;
  }
}

export default new SettingsOptionsRepository();
