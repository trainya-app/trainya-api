import { Request, Response } from 'express';
import MemberMonthsDayProgressRepository from '../../repositories/members/MemberMonthsDayProgressRepository';
import MembersRepository from '../../repositories/members/MembersRepository';

class MemberMonthsDayProgressController {
  async index(req: Request, res: Response) {
    const memberMonthsDayProgresses =
      await MemberMonthsDayProgressRepository.findAll();
    return res.send({ memberMonthsDayProgresses });
  }

  async store(req: Request, res: Response) {
    const { memberId, monthId } = req.body;

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res
        .status(404)
        .json({ message: 'Membro não encontrado', member: null });
    }

    const createdMemberMonthsDayProgresses =
      await MemberMonthsDayProgressRepository.create({
        member_id: memberId,
        month_id: monthId,
      });

    return res.status(200).json({
      message: ' Progresso de dias do mês do membro criado ',
      createdMemberMonthsDayProgresses,
    });
  }
}

export default new MemberMonthsDayProgressController();
