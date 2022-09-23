import { Request, Response } from 'express';
import TermsRepository from '../../repositories/terms/TermsRepository';

class TermsController {
  async index(req: Request, res: Response) {
    const term = await TermsRepository.getTerms();
    return res.status(200).json({ message: 'Termos de uso', term });
  }

  async store(req: Request, res: Response) {
    const content = req.body;

    const termExists = await TermsRepository.getTerms();
    if (termExists) {
      return res
        .status(400)
        .json({ message: 'Termos de uso já cadastrados', term: null });
    }

    const term = await TermsRepository.create(content);
    return res.status(200).json({ message: 'Termo de uso criado', term });
  }

  async update(req: Request, res: Response) {
    const content = req.body;

    const termExists = await TermsRepository.getTerms();
    if (!termExists) {
      return res
        .status(404)
        .json({ message: 'Termos de uso não cadastrados', term: null });
    }

    const term = await TermsRepository.update({ id: termExists.id, content });
    return res.status(200).json({ message: 'Termo de uso atualizado', term });
  }
}

export default new TermsController();
