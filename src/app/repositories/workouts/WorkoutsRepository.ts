import { PrismaClient } from '@prisma/client';
const { workout } = new PrismaClient();

class WorkoutsRepository {
  async findAll() {
    const workouts = await workout.findMany();
    return workouts;
  }
}

export default new WorkoutsRepository();
