import { PrismaClient } from '@prisma/client';
const { exercise } = new PrismaClient();
class ExercisesRepository {
  async findAll() {
    const exercises = await exercise.findMany();
    return exercises;
  }
}

export default new ExercisesRepository();
