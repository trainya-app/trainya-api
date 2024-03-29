import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import DocumentsRepository from '../../repositories/documents/DocumentsRepository';
import MembersDocumentsRepository from '../../repositories/members/MembersDocumentsRepository';
import MembersRepository from '../../repositories/members/MembersRepository';

class MembersDocumentsController {
  async index(req: Request, res: Response) {
    const memberDocuments = await MembersDocumentsRepository.findAll();

    return res.send({ memberDocuments });
  }

  async store(req: Request, res: Response) {
    const { memberId, documentId, value } = req.body;

    const someFieldIsEmpty = isSomeEmpty([memberId, documentId, value]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        memberDocument: null,
      });
    }

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res
        .status(404)
        .json({ message: 'Membro não encontrado', memberDocument: null });
    }

    const documentExists = await DocumentsRepository.findById(documentId);
    if (!documentExists) {
      return res
        .status(404)
        .json({ message: 'Documento não encontrado', memberDocument: null });
    }

    const memberDocument = await MembersDocumentsRepository.create({
      member_id: memberId,
      document_id: documentId,
      value,
    });

    return res
      .status(200)
      .json({ message: 'Documento do membro ', memberDocument });
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({
        message: 'ID inválido',
        memberDocument: null,
      });
    }

    const memberDocumentExists = await MembersDocumentsRepository.findById(
      parsedId
    );
    if (!memberDocumentExists) {
      return res.status(404).json({
        message: 'Documento do membro não encontrado',
        memberDocument: null,
      });
    }

    return res.status(200).json({
      message: 'Documento do membro encontrado',
      memberDocument: memberDocumentExists,
    });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({
        message: 'ID inválido',
        memberDocument: null,
      });
    }

    const memberDocumentExists = await MembersDocumentsRepository.findById(
      parsedId
    );

    if (!memberDocumentExists) {
      return res.status(404).json({
        message: 'Documento do membro não encontrado',
        memberDocument: null,
      });
    }

    await MembersDocumentsRepository.delete(parsedId);

    return res.sendStatus(200);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const { memberId, documentId, value } = req.body;

    const someFieldIsEmpty = isSomeEmpty([memberId, documentId, value]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        memberDocument: null,
      });
    }

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({
        message: 'ID inválido',
        memberDocument: null,
      });
    }

    const memberDocumentExists = await MembersDocumentsRepository.findById(
      parsedId
    );
    if (!memberDocumentExists) {
      return res.status(404).json({
        message: 'Documento do membro não encontrado',
        memberDocument: null,
      });
    }

    const document_id = Number.isNaN(Number(documentId))
      ? undefined
      : Number(documentId);
    const member_id = Number.isNaN(Number(memberId))
      ? undefined
      : Number(memberId);

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res
        .status(404)
        .json({ message: 'Membro não encontrado', memberDocument: null });
    }

    const documentExists = await DocumentsRepository.findById(documentId);
    if (!documentExists) {
      return res
        .status(404)
        .json({ message: 'Documento não encontrado', memberDocument: null });
    }

    const memberDocument = await MembersDocumentsRepository.update({
      id: parsedId,
      member_id,
      document_id,
    });

    return res.status(200).json({
      message: 'Documento do membro atualizado',
      memberDocument,
    });
  }
}

export default new MembersDocumentsController();
