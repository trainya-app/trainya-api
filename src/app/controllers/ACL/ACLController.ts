import { Request, Response } from 'express';
import ACLRepository from '../../repositories/ACL/ACLRepository';

class ACLController {
  async index(req: Request, res: Response) {
    const memberRoles = await ACLRepository.findMemberRoles();
    const memberPermisions = await ACLRepository.findMemberPermissions();

    return res.send({ memberRoles, memberPermisions });
  }
}

export default new ACLController();
