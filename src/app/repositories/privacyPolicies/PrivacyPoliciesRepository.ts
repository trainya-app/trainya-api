import { PrismaClient } from '@prisma/client';
const { privacyPolicie } = new PrismaClient();

class PrivacyPoliciesRepository {
  async findAll() {
    return privacyPolicie.findFirst();
  }

  async create(content: string) {
    return privacyPolicie.create({
      data: {
        content,
      },
      select: {
        id: true,
        content: true,
      },
    });
  }

  async update({ id, content }: { id: number; content: string }) {
    return await privacyPolicie.update({
      where: {
        id,
      },
      data: {
        content,
      },
      select: {
        id: true,
        content: true,
      },
    });
  }
}

export default new PrivacyPoliciesRepository();
