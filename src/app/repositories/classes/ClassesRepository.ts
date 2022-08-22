import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface IClass {
  gym_id: number;
  title: string;
  description: string;
}

interface IUpdateClass {
  id: number;
  gym_id?: number;
  title: string;
  description: string;
}

class ClassesRepository {
  async findAll() {
    const classes = await prisma.class.findMany();
    return classes;
  }

  async findByTitle(title: string) {
    const titleExists = await prisma.class.findFirst({
      where: { title },
    });
    return titleExists;
  }

  async create({ gym_id, title, description }: IClass) {
    const createdClass = await prisma.class.create({
      data: {
        gym_id,
        title,
        description,
      },
    });
    return createdClass;
  }

  async findById(id: number) {
    const classExists = await prisma.class.findFirst({
      where: { id },
    });
    return classExists;
  }

  async delete(id: number) {
    await prisma.class.delete({
      where: { id },
    });
    return true;
  }

  async update({ id, gym_id, title, description }: IUpdateClass) {
    const updatedClass = await prisma.class.update({
      where: { id },
      data: {
        title,
        gym_id,
        description,
      },
    });
    return updatedClass;
  }
}

export default new ClassesRepository();
