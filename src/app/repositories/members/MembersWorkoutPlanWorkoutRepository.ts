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

  async findByMember(memberId: number){
    const finishedWorkouts = await memberworkoutplanworkout.findMany({
      where:{
        memberId,
      }
    })

    return finishedWorkouts;
  }

  async findByMemberAndWorkoutPlanWorkout({memberId, workoutPlanWorkoutId} :{memberId: number, workoutPlanWorkoutId: number}){
    return await memberworkoutplanworkout.findFirst({
      where:{
        memberId,
        workoutPlanWorkoutId
      }
    })
  }

  async delete(id: number){
    return await memberworkoutplanworkout.delete({
      where:{
        id
      }
    })
  }

}

export default new MembersWorkoutsPlansRepository();
