import { Router } from 'express';
import WorkoutsController from '../app/controllers/workouts/WorkoutsController';
const workoutRoutes = Router();

workoutRoutes.get('/workouts', WorkoutsController.index);
// workoutRoutes.get('/workouts', WorkoutsController.index);
// workoutRoutes.get('/workouts', WorkoutsController.index);
// workoutRoutes.get('/workouts', WorkoutsController.index);
// workoutRoutes.get('/workouts', WorkoutsController.index);

export default workoutRoutes;
