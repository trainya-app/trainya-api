import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import GoalsRepository from '../../repositories/goals/GoalsRepository';

class GoalsController {
  async index(req: Request, res: Response) {
    const goals = await GoalsRepository.findAll();
    return res.send({ goals });
  }

  async store(req: Request, res: Response) {
    const { description } = req.body;

    const someFieldIsEmpty = isSomeEmpty([description]);
    if (someFieldIsEmpty) {
      return res.status(400).send({
        message: 'Campos obrigatórios não foram enviados',
        goal: null,
      });
    }

    const goalExists = await GoalsRepository.findByDescription({ description });
    if (goalExists) {
      return res.status(400).send({
        message: 'Meta já cadastrada',
        goal: null,
      });
    }

    const goal = await GoalsRepository.create({ description });
    return res.status(200).json({ goal });
  }
}

export default new GoalsController();
