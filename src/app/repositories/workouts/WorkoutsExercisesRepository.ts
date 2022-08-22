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
}

export default new WorkoutsExercisesRepository();
