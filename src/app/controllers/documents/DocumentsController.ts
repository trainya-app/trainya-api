import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import DocumentsRepository from '../../repositories/documents/DocumentsRepository';

class DocumentsController {
  async index(req: Request, res: Response) {
    const documents = await DocumentsRepository.findAll();

    return res.send({ documents });
  }

  async store(req: Request, res: Response) {
    const { name } = req.body;

    const someFieldIsEmpty = isSomeEmpty([name]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        document: null,
      });
    }

    const nameExists = await DocumentsRepository.findByName({ name });
    if (nameExists) {
      return res
        .status(400)
        .json({ message: 'Nome já está em uso', document: null });
    }

    const document = await DocumentsRepository.create({ name });
    return res.status(200).json({ message: 'Documento criado', document });
  }
}

export default new DocumentsController();
