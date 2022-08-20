import { PrismaClient } from '@prisma/client';
const { memberSetting } = new PrismaClient();
class MembersSettingsRepository {
  async findAll() {
    const memberSettings = await memberSetting.findMany();
    return memberSettings;
  }
}

export default new MembersSettingsRepository();
