import e, { Request, Response } from "express";
import { isSomeEmpty } from "../../../utils/isSomeEmpty";
import MemberPhotoProgressRepository from "../../repositories/members/MemberPhotoProgressRepository";
import MembersRepository from "../../repositories/members/MembersRepository";

class MemberPhotoProgressController{
  async index(req: Request, res: Response){
    const memberPhotoProgresses = await MemberPhotoProgressRepository.findAll();
    return res.send({ message: 'Encontrados', memberPhotoProgresses})
  }

  async store(req: Request, res: Response){
    const memberId = req.userId;
    const { firstPhoto, secondPhoto, thirdPhoto, monthId } = req.body;

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res.status(400).send({
        message: 'Membro não encontrado',
        memberSetting: null,
      });
    }

    const createdMemberPhotoProgress = await MemberPhotoProgressRepository.create({ member_id: memberId, month_id: monthId});


    return res.status(200).json({ message: "Criado", createdMemberPhotoProgress}) 
  }

  async uploadFirstPhoto(req: Request, res: Response){
    const memberId = req.userId;
    const firstPhoto_url = req.firebaseUrl;
    const { monthId } = req.params;
    const month_id = Number(monthId);

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res.status(400).send({
        message: 'Membro não encontrado',
        memberSetting: null,
      });
    }

    const memberPhotoProgress = await MemberPhotoProgressRepository.findByMemberAndMonth({ member_id: memberId, month_id});
    if(!memberPhotoProgress){
      return res.status(404).json({ message: "Progresso não encontrado", memberPhotoProgress: null})
    }

    const updatedMemberPhotoProgress = await MemberPhotoProgressRepository.putFirstPhoto({firstPhoto_url, id: memberPhotoProgress.id});

    return res.status(200).json({ message: 'Foto atualizada', updatedMemberPhotoProgress});
  }

  async uploadSecondPhoto(req: Request, res: Response){
    const memberId = req.userId;
    const secondPhoto_url = req.firebaseUrl;
    const { monthId } = req.params;
    const month_id = Number(monthId);

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res.status(400).send({
        message: 'Membro não encontrado',
        memberSetting: null,
      });
    }

    const memberPhotoProgress = await MemberPhotoProgressRepository.findByMemberAndMonth({ member_id: memberId, month_id });
    if(!memberPhotoProgress){
      return res.status(404).json({ message: "Progresso não encontrado", memberPhotoProgress: null})
    }

    const updatedMemberPhotoProgress = await MemberPhotoProgressRepository.putSecondPhoto({secondPhoto_url, id: memberPhotoProgress.id});

    return res.status(200).json({ message: 'Foto atualizada', updatedMemberPhotoProgress});
  }

  async uploadThirdPhoto(req: Request, res: Response){
    const memberId = req.userId;
    const thirdPhoto_url = req.firebaseUrl;
    const { monthId } = req.params;
    const month_id = Number(monthId);

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res.status(400).send({
        message: 'Membro não encontrado',
        memberSetting: null,
      });
    }

    const memberPhotoProgress = await MemberPhotoProgressRepository.findByMemberAndMonth({ member_id: memberId, month_id});
    if(!memberPhotoProgress){
      return res.status(404).json({ message: "Progresso não encontrado", memberPhotoProgress: null})
    }

    const updatedMemberPhotoProgress = await MemberPhotoProgressRepository.putThirdPhoto({thirdPhoto_url, id: memberPhotoProgress.id});

    return res.status(200).json({ message: 'Foto atualizada', updatedMemberPhotoProgress});
  }

  async showByMember(req: Request, res: Response){
    const member_id = req.userId;

    const memberExists = await MembersRepository.findById(member_id);
    if (!memberExists) {
      return res.status(400).send({
        message: 'Membro não encontrado',
        memberSetting: null,
      });
    }

    const memberPhotosProgress = await MemberPhotoProgressRepository.findByMember(member_id);
    
    return res.status(200).json({ message: 'Fotos encontradas', memberPhotosProgress});
  }

  async showByMemberAndMonth(req: Request, res: Response){
    const memberId = req.userId;
    const { monthId } = req.body;

    const someFieldIsEmpty = isSomeEmpty([monthId]);
    if(someFieldIsEmpty){
      return res.status(400).json({message: "Preencha todos os campos", memberPhotoProgress: null})
    }

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res.status(400).send({
        message: 'Membro não encontrado',
        memberSetting: null,
      });
    }

    const memberPhotoProgress = await MemberPhotoProgressRepository.findByMemberAndMonth({ member_id: memberId, month_id: monthId});
    
    return res.status(200).json({ message: 'Fotos encontradas', memberPhotoProgress});
  }
}

export default new MemberPhotoProgressController();
