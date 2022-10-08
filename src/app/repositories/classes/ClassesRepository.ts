import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface IClass {
  gym_id: number;
  title: string;
  description: string;
  hour: number;
  min_members: number;
  max_members: number;
}

interface IUpdateClass {
  id: number;
  gym_id?: number;
  title: string;
  description: string;
  hour: number;
  min_members: number;
  max_members: number;
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

  async create({
    gym_id,
    title,
    description,
    hour,
    min_members,
    max_members,
  }: IClass) {
    const createdClass = await prisma.class.create({
      data: {
        gym_id,
        title,
        description,
        hour,
        min_members,
        max_members,
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

  async update({
    id,
    gym_id,
    title,
    description,
    hour,
    min_members,
    max_members,
  }: IUpdateClass) {
    const updatedClass = await prisma.class.update({
      where: { id },
      data: {
        title,
        gym_id,
        description,
        hour,
        min_members,
        max_members,
      },
    });
    return updatedClass;
  }

  async findByGym(gym_id: number) {
    return await prisma.class.findMany({
      where: {
        gym_id,
      },
      select: {
        employeeClass: {
          select: {
            employee: {
              select: {
                name: true,
              },
            },
          },
        },
        classWeekDay: {
          select: {
            weekDay: {
              select: {
                name: true,
              },
            },
          },
        },
        hour: true,
        min_members: true,
        max_members: true,
      },
    });
  }
}

export default new ClassesRepository();
