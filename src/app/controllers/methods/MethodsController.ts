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

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const method = await MethodsRepository.findById(parsedId);
    if (!method) {
      return res.status(400).send({
        message: 'Método não encontrado',
        method: null,
      });
    }

    await MethodsRepository.delete(parsedId);
    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const methodExists = await MethodsRepository.findById(parsedId);
    if (!methodExists) {
      return res.status(400).send({
        message: 'Método não encontrado',
        method: null,
      });
    }

    return res.send({ method: methodExists });
  }
}

export default new MethodsController();
