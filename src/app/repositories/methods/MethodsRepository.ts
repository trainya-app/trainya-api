import { PrismaClient } from '@prisma/client';
const { method } = new PrismaClient();

interface IMethod {
  name: string;
}

class MethodsRepository {
  async findAll() {
    const methods = await method.findMany();
    return methods;
  }

  async findByName({ name }: IMethod) {
    const methodExists = await method.findFirst({
      where: {
        name,
      },
    });
    return methodExists;
  }

  async create({ name }: IMethod) {
    const createdMethod = await method.create({
      data: {
        name,
      },
    });
    return createdMethod;
  }
}

export default new MethodsRepository();
