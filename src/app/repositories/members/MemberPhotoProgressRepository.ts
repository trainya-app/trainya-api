import { PrismaClient } from '@prisma/client'
const { memberPhotoProgress } = new PrismaClient();

class MemberPhotoProgressRepository{
  async findAll(){
    return await memberPhotoProgress.findMany();
  }

  async create({ member_id, month_id}: {member_id: number, month_id: number}){
    return await memberPhotoProgress.create({
      data:{
        member_id,
        month_id
      }
    })
  }

  async createForAllMonths(member_id: number) {
    try {
      const createdProgresses = await memberPhotoProgress.createMany({
        data: [
          { member_id, month_id: 1 },
          { member_id, month_id: 2 },
          { member_id, month_id: 3 },
          { member_id, month_id: 4 },
          { member_id, month_id: 5 },
          { member_id, month_id: 6 },
          { member_id, month_id: 7 },
          { member_id, month_id: 8 },
          { member_id, month_id: 9 },
          { member_id, month_id: 10 },
          { member_id, month_id: 11 },
          { member_id, month_id: 12 },
        ],
      });
      return createdProgresses;
    } catch (err: any) {
      console.log(err);
      return null;
    }
  }

  async findByMemberAndMonth({ member_id, month_id}:{member_id: number, month_id: number}){
    return await memberPhotoProgress.findFirst({
      where:{
        month_id,
        member_id
      }
    })
  }

  async putFirstPhoto({firstPhoto_url, id }:{firstPhoto_url: string, id: number}){
    return await memberPhotoProgress.update({
      where:{
        id,
      },
      data:{
        firstPhoto_url
      }
    })
  }

  async putSecondPhoto({secondPhoto_url, id }:{secondPhoto_url: string, id: number}){
    return await memberPhotoProgress.update({
      where:{
        id,
      },
      data:{
        secondPhoto_url
      }
    })
  }

  async putThirdPhoto({thirdPhoto_url, id }:{thirdPhoto_url: string, id: number}){
    return await memberPhotoProgress.update({
      where:{
        id,
      },
      data:{
        thirdPhoto_url
      }
    })
  }

  async findByMember(member_id: number){
    return await memberPhotoProgress.findMany({
      where:{
        member_id
      },
      select:{
        month:{
          select:{
            name: true,
          }
        },
        firstPhoto_url: true,
        secondPhoto_url: true,
        thirdPhoto_url: true,
      }
    })
  }
}

export default new MemberPhotoProgressRepository();