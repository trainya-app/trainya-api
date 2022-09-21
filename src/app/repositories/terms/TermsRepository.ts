import { PrismaClient } from '@prisma/client';
const { term } = new PrismaClient();

class TermsRepository {
  async getTerms() {
    const terms = await term.findFirst();
    return terms as { id: number; content: string };
  }

  async create(content: string) {
    const createdTerm = await term.create({
      data: {
        content,
      },
      select: {
        id: true,
        content: true,
      },
    });

    return createdTerm;
  }

  async update({ id, content }: { id: number; content: string }) {
    const updatedTerm = await term.update({
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

    return updatedTerm;
  }
}

export default new TermsRepository();
