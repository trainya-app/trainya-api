import { PrismaClient } from '@prisma/client';
const { workoutPlanWorkout } = new PrismaClient();

interface IWorkoutPlanWorkout {
  workouts_plan_id: number;
  workout_id: number;
}

interface IUpdateWorkoutPlanWorkout {
  id: number;
  workouts_plan_id?: number;
  workout_id?: number;
}

class WorkoutsPlansWorkoutsRepository {
  async findAll() {
    const workoutPlanWorkouts = await workoutPlanWorkout.findMany();
    return workoutPlanWorkouts;
  }

  async create({ workout_id, workouts_plan_id }: IWorkoutPlanWorkout) {
    const createdWorkoutPlanWorkout = await workoutPlanWorkout.create({
      data: {
        workout_id,
        workouts_plan_id,
      },
    });
    return createdWorkoutPlanWorkout;
  }

  async delete(id: number) {
    await workoutPlanWorkout.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async findById(id: number) {
    const workoutPlanWorkoutExists = await workoutPlanWorkout.findFirst({
      where: {
        id,
      },
    });

    return workoutPlanWorkoutExists;
  }

  async update({
    id,
    workouts_plan_id,
    workout_id,
  }: IUpdateWorkoutPlanWorkout) {
    const updatedWorkoutPlanWorkout = await workoutPlanWorkout.update({
      where: {
        id,
      },
      data: {
        workouts_plan_id,
        workout_id,
      },
    });

    return updatedWorkoutPlanWorkout;
  }
}

export default new WorkoutsPlansWorkoutsRepository();
