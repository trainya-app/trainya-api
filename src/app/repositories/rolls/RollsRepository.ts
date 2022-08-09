import { PrismaClient, Roll } from '@prisma/client';
const { roll } = new PrismaClient();

class RollsRepository {
  async findAll() {
    const rolls = await roll.findMany();

    return rolls;
  }
}

export default new RollsRepository();
