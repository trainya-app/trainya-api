import { Request, Response } from 'express';
import MembersClassesRepository from '../../repositories/members/MembersClassesRepository';

class MembersClassesController {
  async index(req: Request, res: Response) {
    const memberClasses = await MembersClassesRepository.findAll();
    return res.send({ memberClasses });
  }
}

export default new MembersClassesController();
