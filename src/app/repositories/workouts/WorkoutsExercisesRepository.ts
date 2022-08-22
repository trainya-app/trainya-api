import { PrismaClient } from '@prisma/client';
const { workoutExercise } = new PrismaClient();
class WorkoutsExercisesRepository {
  async findAll() {
    const workoutsExercises = await workoutExercise.findMany();
    return workoutsExercises;
  }
}

export default new WorkoutsExercisesRepository();
