import { Router } from 'express';
const goalsRoutes = Router();
import GoalsController from '../app/controllers/goals/GoalsController';

goalsRoutes.get('/goals', GoalsController.index);
goalsRoutes.get('/goals/:id', GoalsController.show);
goalsRoutes.post('/goals', GoalsController.store);
goalsRoutes.put('/goals/:id', GoalsController.update);
goalsRoutes.delete('/goals/:id', GoalsController.delete);

export default goalsRoutes;
