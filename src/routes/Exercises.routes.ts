import { Router } from 'express';
import ExercisesController from '../app/controllers/exercises/ExercisesController';
const exercisesRoutes = Router();

exercisesRoutes.get('/exercises', ExercisesController.index);
exercisesRoutes.post('/exercises', ExercisesController.store);
exercisesRoutes.delete('/exercises/:id', ExercisesController.delete);
// exercisesRoutes.get('/exercises'/:id, ExercisesController.show);
// exercisesRoutes.put('/exercises/:id', ExercisesController.update);

export default exercisesRoutes;
