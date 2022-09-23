import { PrismaClient } from '@prisma/client';
const { workoutExercise } = new PrismaClient();

interface IWorkoutExercise {
  workout_id: number;
  exercise_id: number;
  sets: number;
  repetitions: number;
  duration: number;
}

interface IUpdateWorkoutExercise {
  id?: number;
  workout_id?: number;
  exercise_id?: number;
  sets?: number;
  repetitions?: number;
  duration?: number;
}
class WorkoutsExercisesRepository {
  async findAll() {
    const workoutsExercises = await workoutExercise.findMany({
      select: {
        workout_id: true,
        workout: {
          select: {
            title: true,
            type: true,
          },
        },
        exercise_id: true,
        exercise: {
          select: {
            name: true,
            comment: true,
          },
        },
      },
    });
    return workoutsExercises;
  }

  async create({
    workout_id,
    exercise_id,
    sets,
    repetitions,
    duration,
  }: IWorkoutExercise) {
    const createdWorkoutExercise = await workoutExercise.create({
      data: {
        workout_id,
        exercise_id,
        sets,
        repetitions,
        duration,
      },
      select: {
        workout_id: true,
        workout: {
          select: {
            title: true,
            type: true,
          },
        },
        exercise_id: true,
        exercise: {
          select: {
            name: true,
            comment: true,
          },
        },
      },
    });
    return createdWorkoutExercise;
  }

  async findById(id: number) {
    const workoutExerciseExists = await workoutExercise.findFirst({
      where: {
        id,
      },
    });

    return workoutExerciseExists;
  }

  async delete(id: number) {
    await workoutExercise.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async update({
    id,
    workout_id,
    exercise_id,
    sets,
    repetitions,
    duration,
  }: IUpdateWorkoutExercise) {
    const updatedWorkoutExercise = await workoutExercise.update({
      data: {
        workout_id,
        exercise_id,
        sets,
        repetitions,
        duration,
      },
      where: {
        id,
      },
    });

    return updatedWorkoutExercise;
  }

  async deleteByWorkoutId(workoutId: number) {
    await workoutExercise.deleteMany({
      where: {
        workout_id: workoutId,
      },
    });
  }

  async deleteByExerciseId(exerciseId: number) {
    await workoutExercise.deleteMany({
      where: {
        exercise_id: exerciseId,
      },
    });
  }
}

export default new WorkoutsExercisesRepository();
