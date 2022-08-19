import { Request, Response } from 'express';
import MembersDocumentsRepository from '../../repositories/members/MembersDocumentsRepository';

class MembersDocumentsController {
  async index(req: Request, res: Response) {
    const memberDocuments = await MembersDocumentsRepository.findAll();

    return res.send({ memberDocuments });
  }
}

export default new MembersDocumentsController();
