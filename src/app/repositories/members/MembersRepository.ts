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
  birth_date: string;
  avatar_url: string;
}

interface IUpdateMember {
  id: number;
  phone: string;
  birth_date: string;
  name: string;
  weight?: number;
  height?: number;
  email: string;
  password: string;
  state: string;
  city: string;
  street: string;
  adress_number?: string;
}

interface IInGym {
  id: number;
  inGym: boolean;
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
    birth_date,
    avatar_url,
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
          birth_date,
          avatar_url,
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

  async updateMember({
    id,
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
    birth_date,
  }: IUpdateMember) {
    const updatedMember = await member.update({
      where: {
        id,
      },
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
        birth_date,
      },
    });

    return updatedMember;
  }

  async findIdByEmail(email: string) {
    const id = await member.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    return id as { id: number };
  }

  async updateAtGym({ inGym, id }: IInGym) {
    const updatedMember = await member.update({
      where: {
        id,
      },
      data: {
        at_gym: inGym,
      },
      select: {
        at_gym: true,
      },
    });

    return updatedMember;
  }
  async updateAvatar({ id, avatar_url }: { id: number; avatar_url: string }) {
    const updatedMember = await member.update({
      where: {
        id,
      },
      data: {
        avatar_url,
      },
    });

    return updatedMember;
  }
}

export default new MembersRepository();
