import { Request, Response } from 'express';
import AuthRolePermissionsRepository from '../../repositories/authRolePermissions/AuthRolePermissionsRepository';

class AuthRolePermissionsController {
  async index(req: Request, res: Response) {
    const authRolePermissions = await AuthRolePermissionsRepository.findAll();
    return res.send({ authRolePermissions });
  }
}

export default new AuthRolePermissionsController();
