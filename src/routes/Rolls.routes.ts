import { Router } from 'express';
import RollsController from '../app/controllers/rolls/RollsController';
const rollsRoutes = Router();

rollsRoutes.get('/rolls', RollsController.index);

export default rollsRoutes;
