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

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const classExists = await ClassesRepository.findById(parsedId);
    if (!classExists) {
      return res.status(400).json({
        message: 'Aula não encontrada',
        class: null,
      });
    }

    await ClassesRepository.delete(parsedId);
    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const classExists = await ClassesRepository.findById(parsedId);
    if (!classExists) {
      return res.status(400).json({
        message: 'Aula não encontrada',
        class: null,
      });
    }

    return res
      .status(200)
      .json({ message: 'Aula encontrada', class: classExists });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const { gymId, title, description } = req.body;
    const someFieldIsEmpty = isSomeEmpty([gymId, title, description]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram preenchidos',
        class: null,
      });
    }

    const classExists = await ClassesRepository.findById(parsedId);
    if (!classExists) {
      return res.status(400).json({
        message: 'Aula não encontrada',
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
      let id = titleExists.id;
      if (id !== parsedId) {
        return res.status(400).json({
          message: 'Aula já cadastrada',
          class: null,
        });
      }
    }

    const gym_id = Number.isNaN(Number(gymId)) ? undefined : Number(gymId);

    const updatedClass = await ClassesRepository.update({
      id: parsedId,
      gym_id,
      title,
      description,
    });
    return res
      .status(200)
      .json({ message: 'Aula atualizada com sucesso', class: updatedClass });
  }
}

export default new ClassesController();
