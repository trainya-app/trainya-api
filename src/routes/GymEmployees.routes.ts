import { Router } from 'express';
import GymsEmployeesController from '../app/controllers/gyms/GymsEmployeesController';
const gymEmployeesRoutes = Router();

gymEmployeesRoutes.get('/gymEmployees', GymsEmployeesController.index);
gymEmployeesRoutes.post('/gymEmployees', GymsEmployeesController.store);

export default gymEmployeesRoutes;
