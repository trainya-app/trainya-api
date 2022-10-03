import { Request, Response } from 'express';
import MonthsRepository from '../../repositories/months/MonthsRepository';

class MonthsController {
  async index(req: Request, res: Response) {
    const months = await MonthsRepository.findAll();
    return res.send({ months });
  }

  async store(req: Request, res: Response) {
    const { name } = req.body;

    const monthExists = await MonthsRepository.findByName(name);
    if (monthExists) {
      return res
        .status(200)
        .json({ message: 'Mês já cadastrado', monthExists });
    }

    const createdMonth = await MonthsRepository.create({ name });
    return res.status(400).json({ message: 'Mês criado', createdMonth });
  }
}

export default new MonthsController();
