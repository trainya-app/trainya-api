import { PrismaClient } from '@prisma/client';
const { workoutExercise } = new PrismaClient();

interface IWorkoutExercise {
  workout_id: number;
  exercise_id: number;
  sets: number;
  repetitions: number;
  duration: number;
}
class WorkoutsExercisesRepository {
  async findAll() {
    const workoutsExercises = await workoutExercise.findMany();
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
}

export default new WorkoutsExercisesRepository();
