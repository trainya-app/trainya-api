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

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const rollExists = await RollsRepository.findById(parsedId);
    if (!rollExists) {
      return res
        .status(401)
        .json({ message: 'Cargo não encontrado', roll: null });
    }

    await RollsRepository.delete(parsedId);

    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const roll = await RollsRepository.findById(parsedId);
    if (!roll) {
      return res
        .status(404)
        .json({ message: 'Cargo não encontrado', roll: null });
    }

    return res.status(200).json({ message: 'Cargo encontrado', roll });
  }

  async update(req: Request, res: Response) {
    const { title, accessLevel } = req.body;
    const { id } = req.params;
    const parsedId = Number(id);

    const rollExists = await RollsRepository.findById(parsedId);
    if (!rollExists) {
      return res
        .status(404)
        .json({ message: 'Cargo não encontrado', roll: null });
    }

    const someFieldIsEmpty = isSomeEmpty([title, accessLevel]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram inseridos',
        roll: null,
      });
    }

    const updatedRoll = await RollsRepository.update({
      title,
      access_level: accessLevel,
      id: parsedId,
    });

    return res.json({ message: 'Cargo atualizado', updatedRoll });
  }
}

export default new RollsController();
