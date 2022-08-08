import { Request, Response } from 'express';
import EmployeesRepository from '../../repositories/employees/EmployeesRepository';

class EmployeesController {
  async index(req: Request, res: Response) {
    const employees = await EmployeesRepository.findAll();

    res.send(employees);
  }
}

export default new EmployeesController();
