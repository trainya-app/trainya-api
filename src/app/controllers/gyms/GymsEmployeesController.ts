import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import GymsEmployeesRepository from '../../repositories/gyms/GymsEmployeesRepository';
import GymsRepository from '../../repositories/gyms/GymsRepository';
import EmployeesRepository from '../../repositories/employees/EmployeesRepository';

class GymsEmployeesController {
  async index(req: Request, res: Response) {
    const gymEmployees = await GymsEmployeesRepository.findAll();

    return res.send({ gymEmployees });
  }

  async store(req: Request, res: Response) {
    const { gymId, employeeId } = req.body;

    const someFieldIsEmpty = isSomeEmpty([gymId, employeeId]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram enviados.',
        gymEmployee: null,
      });
    }

    const gymExists = await GymsRepository.findById(gymId);
    if (!gymExists) {
      return res
        .status(404)
        .json({ message: 'Academia não encontrada', gymEmployee: null });
    }

    // const employeeExists = await EmployeesRepository.findById(employeeId);
    // if (!employeeExists) {
    //   return res
    //     .status(404)
    //     .json({ message: 'Funcionário não encontrado', gymEmployee: null });
    // }

    const gymEmployee = await GymsEmployeesRepository.create({
      gym_id: gymId,
      employee_id: employeeId,
    });

    return res.json({
      message: 'Funcionário da academia cadastrado.',
      gymEmployee,
    });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const gymEmployeeExists = await GymsEmployeesRepository.findById(parsedId);
    if (!gymEmployeeExists) {
      return res.status(404).json({
        message: ' Funcionário da academia não encontrados',
        gymEmployee: null,
      });
    }

    await GymsEmployeesRepository.delete(parsedId);

    return res.sendStatus(200);
  }
}

export default new GymsEmployeesController();
