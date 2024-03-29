import { PrismaClient } from '@prisma/client';
const { workout } = new PrismaClient();

interface IWorkout {
  employee_id: number;
  title: string;
  description: string;
  type: string;
  preview_image_url: string;
  level: string;
  duration: string;
}

interface IUpdateWorkout {
  id: number;
  employee_id?: number;
  title: string;
  description: string;
  type: string;
  preview_image_url: string;
  level: string;
  duration: string;
}

class WorkoutsRepository {
  async findAll() {
    const workouts = await workout.findMany({
      include: {
        workoutExercise: {
          select: {
            id: true,
            sets: true,
            repetitions: true,
            duration: true,
            exercise: {
              select: {
                id: true,
                name: true,
                comment: true,
              },
            },
          },
        },
      },
    });
    return workouts;
  }

  async findByTitle(title: string) {
    const titleExists = await workout.findFirst({
      where: {
        title,
      },
      include: {
        workoutExercise: {
          select: {
            id: true,
            sets: true,
            repetitions: true,
            duration: true,
            exercise: {
              select: {
                id: true,
                name: true,
                comment: true,
              },
            },
          },
        },
      },
    });
    return titleExists;
  }

  async create({
    employee_id,
    title,
    description,
    type,
    preview_image_url,
    level,
    duration,
  }: IWorkout) {
    const createdWorkout = await workout.create({
      data: {
        employee_id,
        title,
        description,
        type,
        preview_image_url,
        level,
        duration,
      },
      select: {
        id: true,
        employee_id: true,
        employee: {
          select: {
            name: true,
          },
        },
        title: true,
        description: true,
        type: true,
        duration: true,
        level: true,
        preview_image_url: true,
      },
    });
    return createdWorkout;
  }

  async findById(id: number) {
    const workoutExists = await workout.findFirst({
      where: {
        id,
      },
      include: {
        workoutExercise: {
          select: {
            id: true,
            sets: true,
            repetitions: true,
            duration: true,
            exercise: {
              select: {
                id: true,
                name: true,
                comment: true,
              },
            },
          },
        },
      },
    });
    return workoutExists;
  }

  async delete(id: number) {
    await workout.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async update({
    id,
    employee_id,
    title,
    description,
    type,
    preview_image_url,
    level,
    duration,
  }: IUpdateWorkout) {
    const updatedWorkout = await workout.update({
      where: {
        id,
      },
      data: {
        employee_id,
        title,
        description,
        type,
        preview_image_url,
        level,
        duration,
      },
    });

    return updatedWorkout;
  }
}

export default new WorkoutsRepository();
