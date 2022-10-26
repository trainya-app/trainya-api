import { PrismaClient } from '@prisma/client'
const { memberPhotoProgress } = new PrismaClient();

class MemberPhotoProgressRepository{
  async findAll(){
    return await memberPhotoProgress.findMany();
  }
}

export default new MemberPhotoProgressRepository();