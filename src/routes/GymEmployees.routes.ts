import { Router } from 'express';
import GymsEmployeesController from '../app/controllers/gyms/GymsEmployeesController';
const gymEmployeesRoutes = Router();

gymEmployeesRoutes.get('/gymEmployees', GymsEmployeesController.index);
gymEmployeesRoutes.get('/gymEmployees/:id', GymsEmployeesController.show);
gymEmployeesRoutes.post('/gymEmployees', GymsEmployeesController.store);
gymEmployeesRoutes.delete('/gymEmployees/:id', GymsEmployeesController.delete);

export default gymEmployeesRoutes;
