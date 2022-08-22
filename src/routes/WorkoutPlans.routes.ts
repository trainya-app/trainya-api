import { Router } from 'express';
import WorkoutsPlansController from '../app/controllers/workouts-plans/WorkoutsPlansController';
const workoutPlanRoutes = Router();

workoutPlanRoutes.get('/workoutPlans', WorkoutsPlansController.index);

export default workoutPlanRoutes;
