import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import GymsRepository from '../../repositories/gyms/GymsRepository';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
class GymsController {
  async index(req: Request, res: Response) {
    const gyms = await GymsRepository.findAll();

    return res.send(gyms);
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
      adress_number: adressNumber,
      zip_code: zipCode,
    });

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
    const gym = await GymsRepository.findById(parsedId);

    if (!gym) {
      return res.status(404).send({ message: 'Academia não encontrada' });
    }

    return res.json({ gym });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const { name, email, state, city, street, adressNumber, zipCode } =
      req.body;

    const updatedGym = await GymsRepository.updateGym({
      id: parsedId,
      name,
      email,
      state,
      city,
      street,
      adress_number: Number.isNaN(Number(adressNumber))
        ? undefined
        : Number(adressNumber),
      zip_code: Number.isNaN(Number(zipCode)) ? undefined : Number(zipCode),
    });

    return res.json({ message: 'Dados atualizados!', updatedGym });
  }
}

export default new GymsController();
