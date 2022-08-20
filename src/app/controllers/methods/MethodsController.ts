import { Request, Response } from 'express';
import MethodsRepository from '../../repositories/methods/MethodsRepository';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';

class MethodsController {
  async index(req: Request, res: Response) {
    const methods = await MethodsRepository.findAll();
    return res.send({ methods });
  }
}

export default new MethodsController();
