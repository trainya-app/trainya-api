import { Router } from 'express';
import EmployeesController from '../app/controllers/employees/EmployeesController';

const employeesRoutes = Router();

employeesRoutes.get('/employees', EmployeesController.index);
employeesRoutes.post('/employees', EmployeesController.store);
employeesRoutes.delete('/employees/:id', EmployeesController.delete);

export default employeesRoutes;
