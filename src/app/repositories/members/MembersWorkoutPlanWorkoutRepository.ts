import { PrismaClient } from '@prisma/client';
const { memberworkoutplanworkout } = new PrismaClient();


class MembersWorkoutsPlansRepository {
  async findAll() {
    const memberWorkoutPlans = await memberworkoutplanworkout.findMany();
    return memberWorkoutPlans;
  }

  async setFinished({memberId, workoutPlanWorkoutId} :{memberId: number, workoutPlanWorkoutId: number}){
    const finishedWorkout = await memberworkoutplanworkout.create({
      data:{
        memberId,
        workoutPlanWorkoutId,
        is_complete: true
      }
    })

    return finishedWorkout;
  }

}

export default new MembersWorkoutsPlansRepository();
