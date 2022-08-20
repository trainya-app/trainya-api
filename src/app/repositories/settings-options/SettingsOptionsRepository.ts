import { PrismaClient } from '@prisma/client';
const { settingOption } = new PrismaClient();

interface ISettingOption {
  description: string;
}

interface IUpdateSettingOption {
  id: number;
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

  async findById(id: number) {
    const settingOptionExists = await settingOption.findFirst({
      where: { id },
    });
    return settingOptionExists;
  }

  async delete(id: number) {
    await settingOption.delete({ where: { id } });
    return true;
  }

  async update({ id, description }: IUpdateSettingOption) {
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

  async findIdByDescription({ description }: ISettingOption) {
    const id = await settingOption.findFirst({
      where: { description },
    });
    return id as { id: number };
  }
}

export default new SettingsOptionsRepository();
