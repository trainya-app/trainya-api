import { Router } from 'express';
const goalsRoutes = Router();
import GoalsController from '../app/controllers/goals/GoalsController';

goalsRoutes.get('/goals', GoalsController.index);

export default goalsRoutes;
