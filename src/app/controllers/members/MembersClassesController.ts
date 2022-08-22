import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import ClassesRepository from '../../repositories/classes/ClassesRepository';
import MembersClassesRepository from '../../repositories/members/MembersClassesRepository';
import MembersRepository from '../../repositories/members/MembersRepository';

class MembersClassesController {
  async index(req: Request, res: Response) {
    const memberClasses = await MembersClassesRepository.findAll();
    return res.send({ memberClasses });
  }

  async store(req: Request, res: Response) {
    const { memberId, classId } = req.body;
    const someFieldIsEmpty = isSomeEmpty([memberId, classId]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        memberClass: null,
      });
    }

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res
        .status(400)
        .json({ message: 'Membro não encontrado', memberClass: null });
    }

    const classExists = await ClassesRepository.findById(classId);
    if (!classExists) {
      return res
        .status(400)
        .json({ message: 'Aula não encontrada', memberClass: null });
    }

    const memberClass = await MembersClassesRepository.create({
      member_id: memberId,
      class_id: classId,
    });
    return res
      .status(200)
      .json({ message: 'Aula do membro criada', memberClass });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const memberClassExists = await MembersClassesRepository.findById(parsedId);
    if (!memberClassExists) {
      return res
        .status(400)
        .json({ message: 'Aula do membro não encontrada', memberClass: null });
    }

    await MembersClassesRepository.delete(parsedId);
    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const memberClassExists = await MembersClassesRepository.findById(parsedId);
    if (!memberClassExists) {
      return res
        .status(400)
        .json({ message: 'Aula do membro não encontrada', memberClass: null });
    }

    return res.status(200).json({
      message: 'Aula do membro encontrada',
      memberClass: memberClassExists,
    });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const { memberId, classId } = req.body;
    const someFieldIsEmpty = isSomeEmpty([memberId, classId]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados',
        memberClass: null,
      });
    }

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res
        .status(400)
        .json({ message: 'Membro não encontrado', memberClass: null });
    }

    const classExists = await ClassesRepository.findById(classId);
    if (!classExists) {
      return res
        .status(400)
        .json({ message: 'Aula não encontrada', memberClass: null });
    }

    const memberClass = await MembersClassesRepository.update({
      id: parsedId,
      member_id: memberId,
      class_id: classId,
    });
    return res
      .status(200)
      .json({ message: 'Aula do membro atualizada', memberClass });
  }
}

export default new MembersClassesController();
