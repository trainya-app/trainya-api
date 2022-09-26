import { Request, Response } from 'express';
import PrivacyPoliciesRepository from '../../repositories/privacyPolicies/PrivacyPoliciesRepository';

class PrivacyPoliciesController {
  async index(req: Request, res: Response) {
    const privacyPolicies = await PrivacyPoliciesRepository.findAll();
    return res.json({ privacyPolicies });
  }

  async store(req: Request, res: Response) {
    const content = req.body;

    const termExists = await PrivacyPoliciesRepository.findAll();
    if (termExists) {
      return res.status(400).json({
        message: 'Políticas de Privacidade já cadastradas',
        privacyPolicies: null,
      });
    }

    const privacyPolicies = await PrivacyPoliciesRepository.create(content);
    return res
      .status(200)
      .json({ message: 'Política de Privacidade criada', privacyPolicies });
  }

  async update(req: Request, res: Response) {
    const content = req.body;

    const privacyPolicieExists = await PrivacyPoliciesRepository.findAll();
    if (!privacyPolicieExists) {
      return res.status(404).json({
        message: 'Política de Privacidade não cadastrada',
        privacyPolicie: null,
      });
    }

    const privacyPolicie = await PrivacyPoliciesRepository.update({
      id: privacyPolicieExists.id,
      content,
    });
    return res
      .status(200)
      .json({ message: 'Termo de uso atualizado', privacyPolicie });
  }
}

export default new PrivacyPoliciesController();
