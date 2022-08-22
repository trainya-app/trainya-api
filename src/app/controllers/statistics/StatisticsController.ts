import { Request, Response } from 'express';
import StatisticsRepository from '../../repositories/statistics/StatisticsRepository';

class StatisticsController {
  async index(req: Request, res: Response) {
    const statistics = await StatisticsRepository.findAll();
    return res.send({ statistics });
  }
}

export default new StatisticsController();
