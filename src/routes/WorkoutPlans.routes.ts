import { Router } from 'express';
import WorkoutsPlansController from '../app/controllers/workouts-plans/WorkoutsPlansController';
const workoutPlanRoutes = Router();

workoutPlanRoutes.get('/workoutPlans', WorkoutsPlansController.index);
workoutPlanRoutes.post('/workoutPlans', WorkoutsPlansController.store);
workoutPlanRoutes.delete('/workoutPlans/:id', WorkoutsPlansController.delete);
workoutPlanRoutes.get('/workoutPlans/:id', WorkoutsPlansController.show);
// workoutPlanRoutes.put('/workoutPlans/:id', WorkoutsPlansController.update);

export default workoutPlanRoutes;
