import { Request, Response } from 'express';
import EmployeesRepository from '../../repositories/employees/EmployeesRepository';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import RolesRepository from '../../repositories/roles/RolesRepository';
import bcrypt from 'bcrypt';
import DocumentsRepository from '../../repositories/documents/DocumentsRepository';

class EmployeesController {
  async index(req: Request, res: Response) {
    const employees = await EmployeesRepository.findAll();
    res.send({ employees });
  }

  async store(req: Request, res: Response) {
    const {
      roleName,
      name,
      birthDate,
      dailyWorkload,
      weeksdaysWorkload,
      phone,
      email,
      password,
      wage,
      profileImg,
      paymentDate,
      documentType,
      documentValue,
      gymId,
    } = req.body;
    const someFieldIsEmpty = isSomeEmpty([
      roleName,
      name,
      birthDate,
      email,
      password,
      documentType,
      documentValue,
      gymId,
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

    const role = await RolesRepository.findByTitle({ title: roleName });

    if (!role) {
      return res
        .status(404)
        .json({ message: 'Cargo não encontrado', employee: null });
    }

    const document = await DocumentsRepository.findByName(documentType);

    const hashedPassword = await bcrypt.hash(password, 8);
    const employee = await EmployeesRepository.create({
      role_id: role?.id as number,
      name,
      birth_date: birthDate,
      daily_workload: dailyWorkload,
      weekdays_workload: weeksdaysWorkload,
      phone,
      email,
      password: hashedPassword,
      wage,
      profile_img: profileImg,
      payment_date: paymentDate,
      documentTypeId: document?.id as number,
      document: documentValue,
    });

    return res.json({
      message: 'Funcionário cadastrado com sucesso',
      employee,
    });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const employeeExists = await EmployeesRepository.findById(parsedId);
    if (!employeeExists) {
      return res
        .status(404)
        .json({ message: 'Funcionário não encontrado', employee: null });
    }

    await EmployeesRepository.delete(parsedId);
    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'ID inválido', employee: null });
    }

    const employeeExists = await EmployeesRepository.findById(parsedId);
    if (!employeeExists) {
      return res
        .status(404)
        .json({ message: 'Funcionário não encontrado', employee: null });
    }

    return res.status(200).json({
      message: 'Funcionário encontrado',
      employee: employeeExists,
    });
  }

  async updatePassword(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const { firstNewPassword, secondNewPassword } = req.body;

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'ID inválido', gym: null });
    }

    if (firstNewPassword !== secondNewPassword) {
      return res
        .status(400)
        .json({ message: 'As senhas não são iguais', newPassword: null });
    }

    const employeeExists = await EmployeesRepository.findById(parsedId);
    if (!employeeExists) {
      return res
        .status(404)
        .json({ message: 'Funcionário não encontrado', employee: null });
    }

    const { password } = await EmployeesRepository.findPasswordById(parsedId);
    const samePassword = await bcrypt.compare(firstNewPassword, password);

    if (samePassword) {
      return res.status(400).json({
        message: 'A senha nova não pode ser igual a antiga',
        newPassword: null,
      });
    }

    const hashedNewPassword = await bcrypt.hash(firstNewPassword, 8);
    const newPassword = await EmployeesRepository.updatePassword({
      password: hashedNewPassword,
      id: parsedId,
    });

    return res.json({ message: 'Atualizada', newPassword });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const {
      roleId,
      name,
      birthDate,
      dailyWorkload,
      weeksdaysWorkload,
      phone,
      email,
      wage,
      profileImg,
      paymentDate,
    } = req.body;
    const parsedId = Number(id);

    const someFieldIsEmpty = isSomeEmpty([
      roleId,
      name,
      birthDate,
      dailyWorkload,
      weeksdaysWorkload,
      phone,
      email,
      wage,
      profileImg,
      paymentDate,
    ]);

    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Preencha todos os campos necessários',
        employee: null,
      });
    }

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'ID Inválido', employee: null });
    }

    const employeeExists = await EmployeesRepository.findById(parsedId);
    if (!employeeExists) {
      return res
        .status(404)
        .json({ message: 'Funcionário não encontrado', employee: null });
    }

    const daily_workload = Number.isNaN(Number(dailyWorkload))
      ? undefined
      : Number(dailyWorkload);
    const weekdays_workload = Number.isNaN(Number(weeksdaysWorkload))
      ? undefined
      : Number(weeksdaysWorkload);
    const vWage = Number.isNaN(Number(wage))
      ? undefined
      : Number(weeksdaysWorkload);

    const emailExists = await EmployeesRepository.findByEmail(email);
    if (emailExists) {
      const idByEmail = await EmployeesRepository.findIdByEmail(email);
      let id = idByEmail.id;
      if (id != parsedId) {
        return res
          .status(400)
          .json({ message: 'Email já está em uso', employee: null });
      }
    }

    const updatedEmployee = await EmployeesRepository.updateEmployee(parsedId, {
      role_id: roleId,
      name,
      birth_date: birthDate,
      daily_workload,
      weekdays_workload,
      phone,
      email,
      wage: vWage,
      profile_img: profileImg,
      payment_date: paymentDate,
    });

    return res.json({ message: 'Dados atualizados!', updatedEmployee });
  }
}

export default new EmployeesController();
