import { Router } from 'express';
import EmployeesClassesController from '../app/controllers/employees/EmployeesClassesController';
const employeesClassesRoutes = Router();

employeesClassesRoutes.get(
  '/employeesClasses',
  EmployeesClassesController.index
);
employeesClassesRoutes.post(
  '/employeesClasses',
  EmployeesClassesController.store
);

export default employeesClassesRoutes;
