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
        id: true,
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

  async findPasswordById(id) {
    const password = await gym.findFirst({
      select: {
        password: true,
      },
      where: {
        id,
      },
    });
    return password;
  }

  async findByName({ name }) {
    const nameExists = await gym.findFirst({
      where: {
        name,
      },
    });

    return nameExists;
  }

  async findById(id) {
    const gymExists = await gym.findFirst({
      where: {
        id,
      },
    });

    return gymExists;
  }

  async delete(id) {
    await gym.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async updatePassword(password, id) {
    const newPassword = await gym.update({
      data: {
        password,
      },
      where: {
        id,
      },
    });

    return newPassword;
  }
}

export default new GymsRepository();
