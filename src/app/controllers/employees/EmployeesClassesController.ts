import { Request, Response } from 'express';
import EmployeesClassesRepository from '../../repositories/employees/EmployeesClassesRepository';

class EmployeesClassesController {
  async index(req: Request, res: Response) {
    const employeesClasses = await EmployeesClassesRepository.findAll();
    return res.send({ employeesClasses });
  }

  async store(req: Request, res: Response) {
    const { employee_id, class_id, rating, comments } = req.body;

    const createdEmployeeClass = await EmployeesClassesRepository.create({
      employee_id,
      class_id,
      rating,
      comments,
    });

    return res.status(200).json({ message: 'Criado', createdEmployeeClass });
  }
}

export default new EmployeesClassesController();
