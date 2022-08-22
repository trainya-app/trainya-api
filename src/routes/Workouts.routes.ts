import { Router } from 'express';
import WorkoutsController from '../app/controllers/workouts/WorkoutsController';
const workoutRoutes = Router();

workoutRoutes.get('/workouts', WorkoutsController.index);
workoutRoutes.post('/workouts', WorkoutsController.store);
workoutRoutes.delete('/workouts/:id', WorkoutsController.delete);
workoutRoutes.get('/workouts/:id', WorkoutsController.show);
// workoutRoutes.get('/workouts', WorkoutsController.index);

export default workoutRoutes;
