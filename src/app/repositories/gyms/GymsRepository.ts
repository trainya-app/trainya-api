import { PrismaClient } from '@prisma/client';
import { Gym } from '@prisma/client';

const { gym } = new PrismaClient();

type IGym = Omit<Gym, 'created_at' | 'updated_at'>;

interface UpdateGym {
  id: number;
  name?: string;
  email?: string;
  state?: string;
  street?: string;
  city?: string;
  adress_number?: number;
  zip_code?: number;
  max_capacity?: number;
  current_capacity?: number;
}

class GymsRepository {
  async findAll() {
    const allGyms = await gym.findMany();

    return allGyms;
  }

  async create({
    name,
    email,
    password,
    state,
    city,
    street,
    adress_number,
    zip_code,
    max_capacity,
    current_capacity,
  }: Omit<IGym, 'id'>) {
    try {
      const createdGym = await gym.create({
        data: {
          name,
          email,
          password,
          state,
          city,
          street,
          zip_code,
          adress_number,
          max_capacity,
          current_capacity,
        },
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
          state: true,
          city: true,
          street: true,
          zip_code: true,
          adress_number: true,
          max_capacity: true,
          current_capacity: true,
        },
      });
      return createdGym;
    } catch {
      return null;
    }
  }

  async findByEmail({ email }: { email: string }) {
    const emailExists = await gym.findFirst({
      where: {
        email,
      },
    });

    return emailExists;
  }

  async findPasswordById(id: number) {
    const password = await gym.findFirst({
      select: {
        password: true,
      },
      where: {
        id,
      },
    });

    return password as { password: string };
  }

  async findByName({ name }: { name: string }) {
    const nameExists = await gym.findFirst({
      where: {
        name,
      },
    });

    return nameExists;
  }

  async findById(id: number) {
    const gymExists = await gym.findFirst({
      where: {
        id,
      },
    });

    return gymExists;
  }

  async delete(id: number) {
    await gym.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async updatePassword(password: string, id: number) {
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

  async updateGym({
    id,
    name,
    email,
    state,
    city,
    street,
    adress_number,
    zip_code,
    max_capacity,
    current_capacity,
  }: UpdateGym) {
    const updatedGym = await gym.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        state,
        city,
        street,
        adress_number,
        zip_code,
        max_capacity,
        current_capacity,
      },
    });

    return updatedGym;
  }

  async findIdByEmail(email: string) {
    const id = await gym.findFirst({
      where: {
        email,
      },
    });

    return id as { id: number };
  }
}

export default new GymsRepository();
