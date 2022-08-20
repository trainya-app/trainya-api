import { PrismaClient } from '@prisma/client';
const { settingOption } = new PrismaClient();

class SettingsOptionsRepository {
  async findAll() {
    const settingsOptions = await settingOption.findMany();
    return settingsOptions;
  }
}

export default new SettingsOptionsRepository();
