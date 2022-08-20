import { Request, Response } from 'express';
import MembersPaymentsRepository from '../../repositories/members/MembersPaymentsRepository';

class MembersPaymentsController {
  async index(req: Request, res: Response) {
    const memberPayments = await MembersPaymentsRepository.findAll();
    return res.send({ memberPayments });
  }
}

export default new MembersPaymentsController();
