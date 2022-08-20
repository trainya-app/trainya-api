import { Request, Response } from 'express';
import MethodsRepository from '../../repositories/methods/MethodsRepository';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';

class MethodsController {
  async index(req: Request, res: Response) {
    const methods = await MethodsRepository.findAll();
    return res.send({ methods });
  }

  async store(req: Request, res: Response) {
    const { name } = req.body;
    if (isSomeEmpty([name])) {
      return res.status(400).send({
        message: 'Some fields are empty',
      });
    }

    const nameExists = await MethodsRepository.findByName({ name });
    if (nameExists) {
      return res.status(400).send({
        message: 'Nome já está em uso',
        method: null,
      });
    }

    const method = await MethodsRepository.create(req.body);
    return res.send({ method });
  }
}

export default new MethodsController();
