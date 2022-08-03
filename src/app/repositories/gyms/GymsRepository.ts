import { PrismaClient } from '@prisma/client';

const { gym } = new PrismaClient();

class GymsRepository {
  async findAll() {
    const allGyms = await gym.findMany();

    return allGyms;
  }

  async create({
    name, email, password_hash, state, city, street, adress_number,
  }) {
    const createdGym = await gym.create({
      data: {
        name,
        email,
        password: password_hash,
        state,
        city,
        street,
        adress_number,
      },
      select: {
        name: true,
        email: true,
        password: true,
        state: true,
        city: true,
        street: true,
        adress_number: true,
      },
    });

    return createdGym;
  }

  async findByEmail({ email }) {
    const emailExists = await gym.findFirst({
      where: {
        email,
      },
    });

    return emailExists;
  }

  async findByName({ name }) {
    const nameExists = await gym.findFirst({
      where: {
        name,
      },
    });

    return nameExists;
  }
}

export default new GymsRepository();
