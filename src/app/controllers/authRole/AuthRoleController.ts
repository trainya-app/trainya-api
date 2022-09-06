import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import AuthRoleRepository from '../../repositories/authRole/AuthRoleRepository';

class AuthRoleController {
  async index(req: Request, res: Response) {
    const authRoles = await AuthRoleRepository.findAll();
    return res.send({ authRoles });
  }

  async store(req: Request, res: Response) {
    const { name, description } = req.body;
    const someFieldIsEmpty = isSomeEmpty([name, description]);
    if (someFieldIsEmpty) {
      return res.status(400).send({
        message: 'Campos obrigatórios não foram enviados',
        authRole: null,
      });
    }

    const authRoleExists = await AuthRoleRepository.findByName(name);
    if (authRoleExists) {
      return res.status(400).send({
        message: 'Cargo de autorização já cadastrado',
        authRole: null,
      });
    }

    const authRole = await AuthRoleRepository.create({ name, description });

    return res
      .status(200)
      .json({ message: 'Cargo de autorização criado com sucesso', authRole });
  }
}

export default new AuthRoleController();
