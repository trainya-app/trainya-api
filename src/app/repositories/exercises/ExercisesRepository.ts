import { PrismaClient } from '@prisma/client';
const { exercise } = new PrismaClient();

interface IExercises {
  name: string;
  comment: string;
  needs_equipment: boolean;
  video_url?: string;
}

interface IUpdateExercises {
  id: number;
  name: string;
  comment: string;
  needs_equipment: boolean;
  video_url?: string;

}

class ExercisesRepository {
  async findAll() {
    const exercises = await exercise.findMany({
      select: {
        id: true,
        name: true,
        comment: true,
        needs_equipment: true,
        video_url: true,
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

  async store({ name, comment, needs_equipment, video_url }: IExercises) {
    const createdExercise = await exercise.create({
      data: {
        name,
        comment,
        needs_equipment,
        video_url,
      },
      select: {
        id: true,
        name: true,
        comment: true,
        needs_equipment: true,
        video_url: true,
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

  async update({ id, name, comment, needs_equipment,video_url }: IUpdateExercises) {
    const updatedExercise = await exercise.update({
      where: {
        id,
      },
      data: {
        name,
        comment,
        needs_equipment,
        video_url
      },
    });

    return updatedExercise;
  }
}

export default new ExercisesRepository();
