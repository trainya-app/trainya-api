import { PrismaClient } from '@prisma/client';
const { method } = new PrismaClient();

class MethodsRepository {
  async findAll() {
    const methods = await method.findMany();
    return methods;
  }
}

export default new MethodsRepository();
