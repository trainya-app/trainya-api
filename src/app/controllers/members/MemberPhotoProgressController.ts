import e, { Request, Response } from "express";
import MemberPhotoProgressRepository from "../../repositories/members/MemberPhotoProgressRepository";

class MemberPhotoProgressController{
  async index(req: Request, res: Response){
    const memberPhotoProgresses = await MemberPhotoProgressRepository.findAll();
    return res.send({ message: 'Encontrados', memberPhotoProgresses})
  }
}

export default new MemberPhotoProgressController();
