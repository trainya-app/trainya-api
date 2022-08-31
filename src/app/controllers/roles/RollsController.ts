import { Request, Response } from 'express';
import RolesRepository from '../../repositories/roles/RolesRepository';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';

class RolesController {
  async index(req: Request, res: Response) {
    const roles = await RolesRepository.findAll();

    res.send({ roles });
  }

  async store(req: Request, res: Response) {
    const { title, accessLevel } = req.body;
    const someFieldIsEmpty = isSomeEmpty([title, accessLevel]);

    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram inseridos',
        role: null,
      });
    }

    const roleExists = await RolesRepository.findByTitle({ title });
    if (roleExists) {
      return res.status(400).json({ message: 'Cargo já existe', role: null });
    }

    const role = await RolesRepository.create({
      title,
      access_level: accessLevel,
    });
    return res.status(200).json({ message: 'Cargo criado', role });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const roleExists = await RolesRepository.findById(parsedId);
    if (!roleExists) {
      return res
        .status(401)
        .json({ message: 'Cargo não encontrado', role: null });
    }

    await RolesRepository.delete(parsedId);

    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const role = await RolesRepository.findById(parsedId);
    if (!role) {
      return res
        .status(404)
        .json({ message: 'Cargo não encontrado', role: null });
    }

    return res.status(200).json({ message: 'Cargo encontrado', role });
  }

  async update(req: Request, res: Response) {
    const { title, accessLevel } = req.body;
    const { id } = req.params;
    const parsedId = Number(id);

    const roleExists = await RolesRepository.findById(parsedId);
    if (!roleExists) {
      return res
        .status(404)
        .json({ message: 'Cargo não encontrado', role: null });
    }

    const someFieldIsEmpty = isSomeEmpty([title, accessLevel]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram inseridos',
        role: null,
      });
    }

    const updatedRole = await RolesRepository.update({
      title,
      access_level: accessLevel,
      id: parsedId,
    });

    return res.json({ message: 'Cargo atualizado', updatedRole });
  }
}

export default new RolesController();
