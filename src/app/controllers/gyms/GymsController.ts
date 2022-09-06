import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import GymsRepository from '../../repositories/gyms/GymsRepository';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
class GymsController {
  async index(req: Request, res: Response) {
    const gyms = await GymsRepository.findAll();

    return res.send({ gyms });
  }

  async store(req: Request, res: Response) {
    const {
      name,
      email,
      password,
      state,
      city,
      street,
      adressNumber,
      zipCode,
      maxCapacity,
      currentCapacity,
    } = req.body;

    const someFieldIsEmpty = isSomeEmpty([
      name,
      email,
      password,
      state,
      city,
      street,
      adressNumber,
      zipCode,
      maxCapacity,
      currentCapacity,
    ]);

    if (someFieldIsEmpty) {
      res.status(400).json({
        message: 'Campos obrigatórios não foram enviados.',
        gym: null,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const emailExists = await GymsRepository.findByEmail({ email });
    if (emailExists) {
      return res
        .status(400)
        .json({ message: 'Email já cadastrado', gym: null });
    }

    const gym = await GymsRepository.create({
      name,
      email,
      password: hashedPassword,
      state,
      city,
      street,
      adress_number: Number(adressNumber),
      zip_code: Number(zipCode),
      max_capacity: maxCapacity,
      current_capacity: currentCapacity,
    });

    if (gym === null) {
      return res
        .status(400)
        .json({ message: 'Valores inválidos para criação da academia.' });
    }

    return res.json({ message: 'Academia Criada ', gym });
  }

  async updatePassword(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const { firstNewPassword, secondNewPassword } = req.body;

    if (firstNewPassword !== secondNewPassword) {
      return res
        .status(400)
        .json({ message: 'As senhas não são iguais', newPassword: null });
    }

    const gymExists = await GymsRepository.findById(parsedId);
    if (!gymExists) {
      return res.status(404).json({ message: 'Academia não encontrada' });
    }

    const { password } = await GymsRepository.findPasswordById(parsedId);
    const samePassword = await bcrypt.compare(firstNewPassword, password);

    if (samePassword) {
      return res.status(400).json({
        message: 'A senha nova não pode ser igual a antiga',
        newPassword: null,
      });
    }

    const hashedNewPassword = await bcrypt.hash(firstNewPassword, 8);
    const newPassword = await GymsRepository.updatePassword(
      hashedNewPassword,
      parsedId
    );

    return res.json({ message: 'Atualizada', newPassword });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const gymExists = await GymsRepository.findById(parsedId);

    if (!gymExists) {
      return res.status(404).json({ message: 'Academia não encontrada' });
    }

    await GymsRepository.delete(parsedId);

    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'ID inválido', gym: null });
    }

    const gym = await GymsRepository.findById(parsedId);
    if (!gym) {
      return res
        .status(404)
        .send({ message: 'Academia não encontrada', gym: null });
    }

    return res.status(200).json({ message: 'Academia encontrada', gym });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const {
      name,
      email,
      state,
      city,
      street,
      adressNumber,
      zipCode,
      maxCapacity,
      currentCapacity,
    } = req.body;

    const parsedId = Number(id);

    const gymExists = await GymsRepository.findById(parsedId);
    if (!gymExists) {
      return res
        .status(404)
        .json({ message: 'Academia não encontrada', gym: null });
    }

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'ID Inválido', gym: null });
    }

    const emailExists = await GymsRepository.findByEmail(email);
    if (emailExists) {
      const idByEmail = await GymsRepository.findIdByEmail(email);
      let id = idByEmail.id;
      if (id != parsedId) {
        return res
          .status(400)
          .json({ message: 'Email já está em uso', gym: null });
      }
    }

    const adress_number = Number.isNaN(Number(adressNumber))
      ? undefined
      : Number(adressNumber);
    const zip_code = Number.isNaN(Number(zipCode))
      ? undefined
      : Number(zipCode);
    const max_capacity = Number.isNaN(Number(maxCapacity))
      ? undefined
      : Number(maxCapacity);
    const current_capacity = Number.isNaN(Number(currentCapacity))
      ? undefined
      : Number(zipCode);

    const updatedGym = await GymsRepository.updateGym({
      id: parsedId,
      name,
      email,
      state,
      city,
      street,
      adress_number,
      zip_code,
      current_capacity,
      max_capacity,
    });

    return res.json({ message: 'Dados atualizados!', updatedGym });
  }

  // async updateCapacity(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const { currentCapacity } = req.body;

  //   const parsedId = Number(id);

  //   const gymExists = await GymsRepository.findById(parsedId);
  //   if (!gymExists) {
  //     return res
  //       .status(404)
  //       .json({ message: 'Academia não encontrada', currentCapacity: null });
  //   }

  //   if (currentCapacity < 0) {
  //     return res.status(400).json({
  //       message: 'Capacidade inválida',
  //       currentCapacity: gymExists.current_capacity,
  //     });
  //   }

  //   const percentMaxCapacity = Math.ceil(
  //     gymExists.max_capacity * 0.1 + gymExists.max_capacity
  //   );

  //   console.log(percentMaxCapacity);

  //   if (currentCapacity > percentMaxCapacity) {
  //     return res.status(400).json({
  //       message: 'Capacidade maior do que a suportada',
  //       currentCapacity: gymExists.current_capacity,
  //     });
  //   }

  //   const updatedCapacity = await GymsRepository.updateCurrentCapacity(
  //     parsedId,
  //     currentCapacity
  //   );

  //   return res.json({ message: 'Capacidade atualizada!', updatedCapacity });
  // }
}

export default new GymsController();
