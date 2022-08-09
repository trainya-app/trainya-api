import { Request, Response } from 'express';
import RollsRepository from '../../repositories/rolls/RollsRepository';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';

class RollsController {
  async index(req: Request, res: Response) {
    const rolls = await RollsRepository.findAll();

    res.send(rolls);
  }

  async store(req: Request, res: Response) {
    const { title, accessLevel } = req.body;
    const someFieldIsEmpty = isSomeEmpty([title, accessLevel]);

    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram inseridos',
        roll: null,
      });
    }

    const rollExists = await RollsRepository.findByTitle({ title });
    if (rollExists) {
      return res.status(400).json({ message: 'Cargo já existe', roll: null });
    }

    const roll = await RollsRepository.create({
      title,
      access_level: accessLevel,
    });
    return res.status(200).json({ message: 'Cargo criado', roll });
  }
}

export default new RollsController();
