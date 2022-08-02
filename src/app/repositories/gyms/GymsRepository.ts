import { PrismaClient } from '@prisma/client';

const { gym } = new PrismaClient();

class GymsRepository {
  async findAll() {
    const allGyms = await gym.findMany();

    return allGyms;
  }
}

export default new GymsRepository();
