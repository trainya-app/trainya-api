import { PrismaClient } from '@prisma/client';
const { member } = new PrismaClient();
interface IMember {
  phone: string;
  name: string;
  weight: number;
  height: number;
  email: string;
  password: string;
  state: string;
  city: string;
  street: string;
  adress_number: string;
}

class MembersRepository {
  async findAll() {
    const members = await member.findMany();

    return members;
  }

  async findByEmail({ email }: { email: string }) {
    const emailExists = await member.findFirst({
      where: {
        email,
      },
    });

    return emailExists;
  }

  async findById(id: number) {
    const memberExists = await member.findFirst({
      where: {
        id,
      },
    });
    return memberExists;
  }

  async create({
    phone,
    name,
    weight,
    height,
    email,
    password,
    state,
    city,
    street,
    adress_number,
  }: IMember) {
    try {
      const createdMember = await member.create({
        data: {
          phone,
          name,
          weight,
          height,
          email,
          password,
          state,
          city,
          street,
          adress_number,
        },
      });

      return createdMember;
    } catch (error) {
      return null;
    }
  }

  async delete(id: number) {
    await member.delete({
      where: {
        id,
      },
    });
    return true;
  }

  async findPasswordById(id: number) {
    const password = await member.findFirst({
      select: {
        password: true,
      },
      where: {
        id,
      },
    });

    return password as { password: string };
  }

  async updatePassword(id: number, password: string) {
    const updatedPassword = await member.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
    return updatedPassword;
  }
}

export default new MembersRepository();
