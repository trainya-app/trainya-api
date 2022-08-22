import { PrismaClient } from '@prisma/client';
const { exercise } = new PrismaClient();

interface IExercises {
  name: string;
  comment: string;
  needs_equipment: boolean;
}

class ExercisesRepository {
  async findAll() {
    const exercises = await exercise.findMany();
    return exercises;
  }

  async findByName(name: string) {
    const nameExists = await exercise.findFirst({
      where: {
        name,
      },
    });
    return nameExists;
  }

  async store({ name, comment, needs_equipment }: IExercises) {
    const createdExercise = await exercise.create({
      data: {
        name,
        comment,
        needs_equipment,
      },
    });
    return createdExercise;
  }
}

export default new ExercisesRepository();
