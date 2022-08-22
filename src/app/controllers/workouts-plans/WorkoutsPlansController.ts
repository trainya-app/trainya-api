import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import EmployeesRepository from '../../repositories/employees/EmployeesRepository';
import WorkoutsPlansRepository from '../../repositories/workouts-plans/WorkoutsPlansRepository';

class WorkoutsPlansController {
  async index(req: Request, res: Response) {
    const workoutPlans = await WorkoutsPlansRepository.findAll();
    res.send({ workoutPlans });
  }

  async store(req: Request, res: Response) {
    const { employeeId, goal } = req.body;
    const someFieldIsEmpty = isSomeEmpty([employeeId, goal]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram preenchidos',
        workoutPlan: null,
      });
    }

    const employeeExists = await EmployeesRepository.findById(employeeId);
    if (!employeeExists) {
      return res.status(400).json({
        message: 'Funcionário não encontrado',
        workoutPlan: null,
      });
    }

    const workoutPlan = await WorkoutsPlansRepository.create({
      employee_id: employeeId,
      goal,
    });

    return res
      .status(200)
      .json({ message: 'Plano de treino criado com sucesso', workoutPlan });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const workoutPlanExists = await WorkoutsPlansRepository.findById(parsedId);
    if (!workoutPlanExists) {
      return res.status(400).json({
        message: 'Plano de treino não encontrado',
        workoutPlan: null,
      });
    }

    await WorkoutsPlansRepository.delete(parsedId);
    return res.sendStatus(200);
  }
}

export default new WorkoutsPlansController();
