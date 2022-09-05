import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import AuthPermissionRepository from '../../repositories/authPermissions/AuthPermissionsRepository';

class AuthPermissionController {
  async index(req: Request, res: Response) {
    const authPermissions = await AuthPermissionRepository.findAll();
    return res.send({ authPermissions });
  }

  // async store(req: Request, res: Response) {
  //   const { name, description } = req.body;
  //   const someFieldIsEmpty = isSomeEmpty([name, description]);
  //   if (someFieldIsEmpty) {
  //     return res.status(400).send({
  //       message: 'Campos obrigatórios não foram enviados',
  //       authPermision: null,
  //     });
  //   }

  //   const authPermisionExists = await AuthPermisionRepository.findByName(name);
  //   if (authPermisionExists) {
  //     return res.status(400).send({
  //       message: 'Permissão de autorização já cadastrado',
  //       authPermision: null,
  //     });
  //   }

  //   const authPermision = await AuthPermisionRepository.create({
  //     name,
  //     description,
  //   });

  //   return res.status(200).json({
  //     message: 'Cargo de autorização criado com sucesso',
  //     authPermision,
  //   });
  // }
}

export default new AuthPermissionController();
