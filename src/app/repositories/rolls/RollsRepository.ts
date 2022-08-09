import { PrismaClient, Roll } from '@prisma/client';
import rollsRoutes from '../../../routes/Rolls.routes';
const { roll } = new PrismaClient();

interface IRoll {
  id: number;
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

  async create({ title, access_level }: Omit<IRoll, 'id'>) {
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

  async findById(id: number) {
    const rollExists = await roll.findFirst({
      where: {
        id,
      },
    });
    return rollExists;
  }

  async delete(id: number) {
    await roll.delete({
      where: {
        id,
      },
    });
    return true;
  }

  async update({ title, access_level, id }: IRoll) {
    const updatedRoll = await roll.update({
      where: {
        id,
      },
      data: {
        title,
        access_level,
      },
    });

    return updatedRoll;
  }
}

export default new RollsRepository();
