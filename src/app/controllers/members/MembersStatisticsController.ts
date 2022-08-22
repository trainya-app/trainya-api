import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import MembersRepository from '../../repositories/members/MembersRepository';
import MembersStatisticsRepository from '../../repositories/members/MembersStatisticsRepository';
import StatisticsRepository from '../../repositories/statistics/StatisticsRepository';

class MembersStatisticsController {
  async index(req: Request, res: Response) {
    const memberStatiscs = await MembersStatisticsRepository.findAll();
    return res.send({ memberStatiscs });
  }

  async store(req: Request, res: Response) {
    const { memberId, statisticId, value } = req.body;
    const someFieldIsEmpty = isSomeEmpty([memberId, statisticId, value]);
    if (someFieldIsEmpty) {
      return res.status(200).json({
        message: 'Campos obrigatórios não foram enviados',
        memberStatistic: null,
      });
    }

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res
        .status(200)
        .json({ message: 'Membro não encontrado', memberStatistic: null });
    }

    const statisticExists = await StatisticsRepository.findById(statisticId);
    if (!statisticExists) {
      return res
        .status(200)
        .json({ message: 'Estátistica não encontrada', memberStatistic: null });
    }

    const createdMemberStatistic = await MembersStatisticsRepository.create({
      member_id: memberId,
      statistic_id: statisticId,
      value,
    });

    return res
      .status(200)
      .json({
        message: 'Estátistica do membro criada',
        memberStatistic: createdMemberStatistic,
      });
  }
}

export default new MembersStatisticsController();
