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

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const statisticExists = await StatisticsRepository.findById(parsedId);
    if (!statisticExists) {
      return res
        .status(400)
        .json({ message: 'Estátistica não encontrada', statistic: null });
    }

    await StatisticsRepository.delete(parsedId);
    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const statisticExists = await StatisticsRepository.findById(parsedId);
    if (!statisticExists) {
      return res
        .status(400)
        .json({ message: 'Estátistica não encontrada', statistic: null });
    }

    return res
      .status(200)
      .json({ message: 'Estátistica encontrada', statistic: statisticExists });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
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
      let id = descriptionExist.id;
      if (id != parsedId) {
        return res
          .status(400)
          .json({ message: 'Descrição já existe', statistic: null });
      }
    }

    const updatedStatistic = await StatisticsRepository.update({
      id: parsedId,
      description,
    });

    return res
      .status(200)
      .json({ message: 'Estátistica atualizada', statistic: updatedStatistic });
  }
}

export default new StatisticsController();
