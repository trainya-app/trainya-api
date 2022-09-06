import { Request, Response } from 'express';
import ACLRepository from '../../repositories/ACL/ACLRepository';
import AuthPermissionsRepository from '../../repositories/authPermissions/AuthPermissionsRepository';
import AuthRoleRepository from '../../repositories/authRole/AuthRoleRepository';
import MembersRepository from '../../repositories/members/MembersRepository';

class ACLController {
  async index(req: Request, res: Response) {
    const memberRoles = await ACLRepository.findMemberRoles();
    const memberPermisions = await ACLRepository.findMemberPermissions();

    return res.send({ memberRoles, memberPermisions });
  }

  async store(req: Request, res: Response) {
    const { roleId, permisionId } = req.body;
    const { userId } = req;

    const memberExists = await MembersRepository.findById(Number(userId));
    if (!memberExists) {
      return res.status(404).json({
        message: 'Membro não encontrado',
        memberRole: null,
        memberPermision: null,
      });
    }

    const authRoleExists = await AuthRoleRepository.findById(Number(roleId));
    if (!authRoleExists) {
      return res.status(404).json({
        message: 'Cargo de autorização não encontrado',
        memberRole: null,
        memberPermision: null,
      });
    }

    const memberRole = await ACLRepository.createMemberRole({
      member_id: Number(userId),
      authRole_id: roleId,
    });

    const authPermissionExists = await AuthPermissionsRepository.findById(
      Number(permisionId)
    );

    if (!authPermissionExists) {
      return res.status(404).json({
        message: 'Permissão de autorização não encontrada',
        memberRole: null,
        memberPermision: null,
      });
    }

    const memberPermision = await ACLRepository.createMemberPermission({
      member_id: Number(userId),
      permission_id: permisionId,
    });

    return res
      .status(200)
      .json({ message: 'Sucesso', memberRole, memberPermision });
  }
}

export default new ACLController();
