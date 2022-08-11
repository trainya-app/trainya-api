import { Request, Response } from 'express';
import EmployeesRepository from '../../repositories/employees/EmployeesRepository';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import RollsRepository from '../../repositories/rolls/RollsRepository';
import bcrypt from 'bcrypt';

class EmployeesController {
  async index(req: Request, res: Response) {
    const employees = await EmployeesRepository.findAll();
    res.send(employees);
  }

  async store(req: Request, res: Response) {
    const {
      rollId,
      name,
      birthDate,
      dailyWorkload,
      weeksdaysWorkload,
      phone,
      email,
      password,
    } = req.body;

    const someFieldIsEmpty = isSomeEmpty([
      rollId,
      name,
      birthDate,
      dailyWorkload,
      weeksdaysWorkload,
      phone,
      email,
      password,
    ]);

    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Preencha todos os campos necessários',
        employee: null,
      });
    }

    const emailExists = await EmployeesRepository.findByEmail({ email });
    if (emailExists) {
      return res
        .status(400)
        .json({ message: 'Email já está em uso', employee: null });
    }

    const rollExists = await RollsRepository.findById(rollId);
    if (!rollExists) {
      return res
        .status(404)
        .json({ message: 'Cargo não encontrado', employee: null });
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const employee = await EmployeesRepository.create({
      roll_id: rollId,
      name,
      birth_date: birthDate,
      daily_workload: dailyWorkload,
      weekdays_workload: weeksdaysWorkload,
      phone,
      email,
      password: hashedPassword,
    });

    return res.json({
      message: 'Funcionário cadastrado com sucesso',
      employee,
    });
  }
}

export default new EmployeesController();
