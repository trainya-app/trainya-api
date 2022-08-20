import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import GymsRepository from '../../repositories/gyms/GymsRepository';
import MembersPaymentsRepository from '../../repositories/members/MembersPaymentsRepository';
import MembersRepository from '../../repositories/members/MembersRepository';
import MethodsRepository from '../../repositories/methods/MethodsRepository';

class MembersPaymentsController {
  async index(req: Request, res: Response) {
    const memberPayments = await MembersPaymentsRepository.findAll();
    return res.send({ memberPayments });
  }

  async store(req: Request, res: Response) {
    const { memberId, methodId, gymId, price, dueDate, paymentDate } = req.body;

    const someFieldIsEmpty = isSomeEmpty([
      memberId,
      methodId,
      gymId,
      price,
      dueDate,
      paymentDate,
    ]);
    if (someFieldIsEmpty) {
      return res.status(400).send({
        message: 'Campos obrigatórios não foram enviados',
        memberPayment: null,
      });
    }

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res.status(400).send({
        message: 'Membro não encontrado',
        memberPayment: null,
      });
    }

    const methodExists = await MethodsRepository.findById(methodId);
    if (!methodExists) {
      return res.status(400).send({
        message: 'Método não encontrado',
        memberPayment: null,
      });
    }

    const gymExists = await GymsRepository.findById(gymId);
    if (!gymExists) {
      return res.status(400).send({
        message: 'Academia não encontrada',
        memberPayment: null,
      });
    }

    const memberPayment = await MembersPaymentsRepository.store({
      member_id: memberId,
      method_id: methodId,
      gym_id: gymId,
      price,
      due_date: dueDate,
      payment_date: paymentDate,
    });

    return res
      .status(200)
      .json({ message: 'Pagamento do membro criado', memberPayment });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const memberPaymentExists = await MembersPaymentsRepository.findById(
      parsedId
    );
    if (!memberPaymentExists) {
      return res.status(400).send({
        message: 'Pagamento do membro não encontrado',
        memberPayment: null,
      });
    }

    await MembersPaymentsRepository.delete(parsedId);
    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const memberPaymentExists = await MembersPaymentsRepository.findById(
      parsedId
    );
    if (!memberPaymentExists) {
      return res.status(400).send({
        message: 'Pagamento do membro não encontrado',
        memberPayment: null,
      });
    }

    return res.send({ memberPayment: memberPaymentExists });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const { memberId, methodId, gymId, price, dueDate, paymentDate } = req.body;

    const someFieldIsEmpty = isSomeEmpty([
      memberId,
      methodId,
      gymId,
      price,
      dueDate,
      paymentDate,
    ]);
    if (someFieldIsEmpty) {
      return res.status(400).send({
        message: 'Campos obrigatórios não foram enviados',
        memberPayment: null,
      });
    }
    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res.status(400).send({
        message: 'Membro não encontrado',
        memberPayment: null,
      });
    }

    const methodExists = await MethodsRepository.findById(methodId);
    if (!methodExists) {
      return res.status(400).send({
        message: 'Método não encontrado',
        memberPayment: null,
      });
    }

    const gymExists = await GymsRepository.findById(gymId);
    if (!gymExists) {
      return res.status(400).send({
        message: 'Academia não encontrada',
        memberPayment: null,
      });
    }

    const memberPaymentExists = await MembersPaymentsRepository.findById(
      parsedId
    );
    if (!memberPaymentExists) {
      return res.status(400).send({
        message: 'Pagamento do membro não encontrado',
        memberPayment: null,
      });
    }

    if (Number.isNaN(id)) {
      return res.status(400).send({
        message: 'ID inválido',
        memberPayment: null,
      });
    }

    const member_id = Number.isNaN(Number(memberId))
      ? undefined
      : Number(memberId);

    const method_id = Number.isNaN(Number(methodId))
      ? undefined
      : Number(methodId);

    const gym_id = Number.isNaN(Number(gymId)) ? undefined : Number(gymId);

    const vPrice = Number.isNaN(Number(price)) ? undefined : Number(price);

    const updatedMemberPayment = await MembersPaymentsRepository.update({
      id: parsedId,
      member_id,
      method_id,
      gym_id,
      price: vPrice,
      due_date: dueDate,
      payment_date: paymentDate,
    });

    return res.status(200).json({
      message: 'Pagamento do membro atualizado',
      memberPayment: updatedMemberPayment,
    });
  }
}

export default new MembersPaymentsController();
