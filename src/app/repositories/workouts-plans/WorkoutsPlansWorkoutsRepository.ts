import { PrismaClient } from '@prisma/client';
const { workoutPlanWorkout } = new PrismaClient();

class WorkoutsPlansWorkoutsRepository {
  async findAll() {
    const workoutPlanWorkouts = await workoutPlanWorkout.findMany();
    return workoutPlanWorkouts;
  }
}

export default new WorkoutsPlansWorkoutsRepository();
