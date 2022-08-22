import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import ClassesRepository from '../../repositories/classes/ClassesRepository';
import GymsRepository from '../../repositories/gyms/GymsRepository';

class ClassesController {
  async index(req: Request, res: Response) {
    const classes = await ClassesRepository.findAll();
    return res.send({ classes });
  }

  async create(req: Request, res: Response) {
    const { gymId, title, description } = req.body;
    const someFieldIsEmpty = isSomeEmpty([gymId, title, description]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram preenchidos',
        class: null,
      });
    }

    const gymExists = await GymsRepository.findById(gymId);
    if (!gymExists) {
      return res.status(400).json({
        message: 'Academia não encontrada',
        class: null,
      });
    }

    const titleExists = await ClassesRepository.findByTitle(title);
    if (titleExists) {
      return res.status(400).json({
        message: 'Aula já cadastrada',
        class: null,
      });
    }

    const createdClass = await ClassesRepository.create({
      gym_id: gymId,
      title,
      description,
    });

    return res
      .status(200)
      .json({ message: 'Aula criada com sucesso', class: createdClass });
  }
}

export default new ClassesController();
