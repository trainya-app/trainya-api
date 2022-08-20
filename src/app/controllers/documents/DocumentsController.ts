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

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'ID inválido', document: null });
    }

    const documentExists = await DocumentsRepository.findById(parsedId);
    if (!documentExists) {
      return res
        .status(404)
        .json({ message: 'Documento não encontrado', document: null });
    }

    await DocumentsRepository.delete(parsedId);

    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'ID inválido', document: null });
    }

    const documentExists = await DocumentsRepository.findById(parsedId);
    if (!documentExists) {
      return res
        .status(404)
        .json({ message: 'Documento não encontrado', document: null });
    }

    return res
      .status(200)
      .json({ message: 'Documento encontrado', document: documentExists });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    const parsedId = Number(id);

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'ID inválido', document: null });
    }

    const documentExists = await DocumentsRepository.findById(parsedId);
    if (!documentExists) {
      return res
        .status(404)
        .json({ message: 'Documento não encontrado', document: null });
    }

    const someFieldIsEmpty = isSomeEmpty([name]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        document: null,
      });
    }

    const nameExists = await DocumentsRepository.findByName(name);
    if (nameExists) {
      const idByName = await DocumentsRepository.findIdByName(name);
      let id = idByName.id;
      if (id != parsedId) {
        return res
          .status(400)
          .json({ message: 'Nome já está em uso', document: null });
      }
    }

    const document = await DocumentsRepository.update({ name, id: parsedId });
    return res.status(200).json({ message: 'Documento atualizado', document });
  }
}

export default new DocumentsController();
