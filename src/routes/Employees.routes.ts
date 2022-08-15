import { Router } from 'express';
import EmployeesController from '../app/controllers/employees/EmployeesController';

const employeesRoutes = Router();

employeesRoutes.get('/employees', EmployeesController.index);
employeesRoutes.get('/employees/:id', EmployeesController.show);
employeesRoutes.post('/employees', EmployeesController.store);
employeesRoutes.delete('/employees/:id', EmployeesController.delete);
employeesRoutes.put(
  '/employees/password/:id',
  EmployeesController.updatePassword
);
employeesRoutes.put('/employees/:id', EmployeesController.update);

export default employeesRoutes;
