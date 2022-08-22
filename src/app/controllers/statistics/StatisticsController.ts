import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import StatisticsRepository from '../../repositories/statistics/StatisticsRepository';

class StatisticsController {
  async index(req: Request, res: Response) {
    const statistics = await StatisticsRepository.findAll();
    return res.send({ statistics });
  }

  async store(req: Request, res: Response) {
    const { description } = req.body;

    const someFieldIsEmpty = isSomeEmpty([description]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        statistic: null,
      });
    }

    const descriptionExist = await StatisticsRepository.findByDescription(
      description
    );

    if (descriptionExist) {
      return res
        .status(400)
        .json({ message: 'Descrição já existe', statistic: null });
    }

    const statistic = await StatisticsRepository.create({
      description,
    });
    return res.status(200).json({ message: 'Estátistica criada', statistic });
  }
}

export default new StatisticsController();
