import { PrismaClient } from '@prisma/client';
import { updateDecorator } from 'typescript';
const { method } = new PrismaClient();

interface IMethod {
  name: string;
}

interface IUpdateMethod {
  id: number;
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

  async findById(id: number) {
    const methodExists = await method.findFirst({
      where: {
        id,
      },
    });
    return methodExists;
  }

  async delete(id: number) {
    await method.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async update({ id, name }: IUpdateMethod) {
    const updatedMethod = await method.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return updatedMethod;
  }
}

export default new MethodsRepository();
