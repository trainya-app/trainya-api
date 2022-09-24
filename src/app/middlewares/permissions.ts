import { Request, Response, NextFunction } from 'express';
import ACLRepository from '../repositories/ACL/ACLRepository';
import MembersRepository from '../repositories/members/MembersRepository';

export default function can(permissionsRoute: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;

    const user = await MembersRepository.findById(Number(userId));

    const userPermissions = await ACLRepository.findMemberPermissionByMemberId(
      Number(userId)
    );

    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    const permisisonExists = userPermissions
      .map((permission) => permission.permission?.name)
      .some((permission) => permissionsRoute.includes(permission as string));

    if (!permisisonExists) {
      return res
        .status(401)
        .json({ message: 'Você não tem permissão para acessar essa rota' });
    }

    return next();
  };
}

export function is(rolesRoute: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;

    const user = await MembersRepository.findById(Number(userId));

    const userRoles = await ACLRepository.findMemberRoleByMemberId(
      Number(userId)
    );

    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    const roleExists = userRoles
      .map((role) => role.authRole?.name)
      .some((role) => rolesRoute.includes(role as string));

    if (!roleExists) {
      return res
        .status(401)
        .json({ message: 'Você não tem cargo para acessar essa rota' });
    }

    return next();
  };
}
