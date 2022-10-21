import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import EmployeesRepository from '../../repositories/employees/EmployeesRepository';
import { createToken } from '../../../utils/createToken';
import { SECRET } from '../../contants/secret.token';

interface JWTPayload {
  id: number;
  accessLevel: string;
}
class EmployeeAuthController {
  async isAuthenticated(req: Request, res: Response) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    const token = authorization.split(' ')[1];

    try {
      const tokenDecoded = jwt.verify(token, SECRET) as JWTPayload;

      if (tokenDecoded) {
        return res.sendStatus(200);
      }

      return res.sendStatus(401);
    } catch {
      return res.sendStatus(401);
    }
  }

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
    } as JWTPayload);

    console.log({ token });

    return res.status(200).send({ message: 'Logado', token });
  }
}

export default new EmployeeAuthController();
