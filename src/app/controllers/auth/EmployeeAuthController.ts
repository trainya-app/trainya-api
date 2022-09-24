import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import EmployeesRepository from '../../repositories/employees/EmployeesRepository';
import { createToken } from '../../../utils/createToken';
class EmployeeAuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;
    const someFieldIsEmpty = isSomeEmpty([email, password]);

    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram inseridos',
        employee: null,
        token: null,
      });
    }

    const employee = await EmployeesRepository.findByEmail({ email });
    if (!employee) {
      return res
        .status(400)
        .json({ message: 'Email não existe', employee: null, token: null });
    }

    const isPasswordCorrect = await bcrypt.compare(password, employee.password);

    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ message: 'Senha incorreta', employee: null, token: null });
    }

    const token = createToken({
      id: employee.id,
      accessLevel: employee.role?.access_level,
    });

    return res.status(200).send({ message: 'Logado', token });
  }
}

export default new EmployeeAuthController();
