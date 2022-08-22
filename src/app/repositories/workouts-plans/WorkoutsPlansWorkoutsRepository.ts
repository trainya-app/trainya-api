import { PrismaClient } from '@prisma/client';
const { workoutPlanWorkout } = new PrismaClient();

interface IWorkoutPlanWorkout {
  workouts_plan_id: number;
  workout_id: number;
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
}

export default new WorkoutsPlansWorkoutsRepository();
