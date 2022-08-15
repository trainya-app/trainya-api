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
}

export default new MembersRepository();
