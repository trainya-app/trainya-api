import { Request, Response } from 'express';
import DocumentsRepository from '../../repositories/documents/DocumentsRepository';

class DocumentsController {
  async index(req: Request, res: Response) {
    const documents = await DocumentsRepository.findAll();

    return res.send({ documents });
  }
}

export default new DocumentsController();
