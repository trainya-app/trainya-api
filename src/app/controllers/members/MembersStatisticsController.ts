import { Request, Response } from 'express';
import MembersStatisticsRepository from '../../repositories/members/MembersStatisticsRepository';

class MembersStatisticsController {
  async index(req: Request, res: Response) {
    const memberStatiscs = await MembersStatisticsRepository.findAll();
    return res.send({ memberStatiscs });
  }
}

export default new MembersStatisticsController();
