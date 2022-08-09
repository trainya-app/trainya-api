import { PrismaClient, Roll } from '@prisma/client';
import rollsRoutes from '../../../routes/Rolls.routes';
const { roll } = new PrismaClient();

interface IRoll {
  title: string;
  access_level: string;
}

class RollsRepository {
  async findAll() {
    const rolls = await roll.findMany();

    return rolls;
  }

  async findByTitle({ title }: { title: string }) {
    const rollExists = roll.findFirst({
      select: {
        title: true,
      },
      where: {
        title,
      },
    });
    return rollExists;
  }

  async create({ title, access_level }: IRoll) {
    const createdRoll = await roll.create({
      data: {
        title,
        access_level,
      },
      select: {
        title: true,
        access_level: true,
      },
    });

    return createdRoll;
  }
}

export default new RollsRepository();
