import { Router } from 'express';
import RollsController from '../app/controllers/rolls/RollsController';
const rollsRoutes = Router();

rollsRoutes.get('/rolls', RollsController.index);
rollsRoutes.post('/rolls', RollsController.store);
rollsRoutes.delete('/rolls/:id', RollsController.delete);
rollsRoutes.get('/rolls/:id', RollsController.show);

export default rollsRoutes;
