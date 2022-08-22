import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class ClassesRepository {
  async findAll() {
    const classes = await prisma.class.findMany();
    return classes;
  }
}

export default new ClassesRepository();
