import { Request, Response } from 'express';
import AuthPermissionsRepository from '../../repositories/authPermissions/AuthPermissionsRepository';
import AuthRoleRepository from '../../repositories/authRole/AuthRoleRepository';
import AuthRolePermissionsRepository from '../../repositories/authRolePermissions/AuthRolePermissionsRepository';
import AuthPermissionController from '../authPermissions/AuthPermissionController';

class AuthRolePermissionsController {
  async index(req: Request, res: Response) {
    const authRolePermissions = await AuthRolePermissionsRepository.findAll();
    return res.send({ authRolePermissions });
  }

  async store(req: Request, res: Response) {
    const { roleId, permissionId } = req.body;

    const authRoleExists = await AuthRoleRepository.findById(roleId);

    if (!authRoleExists) {
      return res.status(404).json({
        message: 'Cargo de autorização nao encontrado',
        authRolePermission: null,
      });
    }

    const authPermissionExists = await AuthPermissionsRepository.findById(
      permissionId
    );

    if (!authPermissionExists) {
      return res.status(404).json({
        message: 'Permissão de autorização nao encontrada',
        authRolePermission: null,
      });
    }

    const authRolePermission = await AuthRolePermissionsRepository.create({
      authRole_id: roleId,
      permission_id: permissionId,
    });
    return res.status(200).json({ message: 'Sucesso', authRolePermission });
  }
}

export default new AuthRolePermissionsController();
