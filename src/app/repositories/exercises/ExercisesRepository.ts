import { PrismaClient } from '@prisma/client';
const { exercise } = new PrismaClient();

interface IExercises {
  name: string;
  comment: string;
  needs_equipment: boolean;
}

interface IUpdateExercises {
  id: number;
  name: string;
  comment: string;
  needs_equipment: boolean;
}

class ExercisesRepository {
  async findAll() {
    const exercises = await exercise.findMany({
      select: {
        id: true,
        name: true,
        comment: true,
        needs_equipment: true,
      },
    });
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
      select: {
        id: true,
        name: true,
        comment: true,
        needs_equipment: true,
      },
    });
    return createdExercise;
  }

  async findById(id: number) {
    const exerciseExists = await exercise.findFirst({
      where: {
        id,
      },
    });

    return exerciseExists;
  }

  async delete(id: number) {
    await exercise.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async update({ id, name, comment, needs_equipment }: IUpdateExercises) {
    const updatedExercise = await exercise.update({
      where: {
        id,
      },
      data: {
        name,
        comment,
        needs_equipment,
      },
    });

    return updatedExercise;
  }
}

export default new ExercisesRepository();
