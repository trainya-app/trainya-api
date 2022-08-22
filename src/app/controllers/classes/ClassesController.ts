import { Request, Response } from 'express';
import ClassesRepository from '../../repositories/classes/ClassesRepository';

class ClassesController {
  async index(req: Request, res: Response) {
    const classes = await ClassesRepository.findAll();
    return res.send({ classes });
  }
}

export default new ClassesController();
