import { PrismaClient } from '@prisma/client';
const { privacyPolicies } = new PrismaClient();

class PrivacyPoliciesRepository {
  async findAll() {
    return privacyPolicies.findFirst();
  }

  async create(content: string) {
    return privacyPolicies.create({
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
    return await privacyPolicies.update({
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
