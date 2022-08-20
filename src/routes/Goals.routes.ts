import { Router } from 'express';
const goalsRoutes = Router();
import GoalsController from '../app/controllers/goals/GoalsController';

goalsRoutes.get('/goals', GoalsController.index);
// goalsRoutes.get('/goals:id', GoalsController.show);
goalsRoutes.post('/goals', GoalsController.store);
// goalsRoutes.put('/goals', GoalsController.update);
// goalsRoutes.delete('/goals', GoalsController.delete);

export default goalsRoutes;
