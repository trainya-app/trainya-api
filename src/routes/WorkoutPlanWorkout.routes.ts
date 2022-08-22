import { Router } from 'express';
import WorkoutsPlansWorkoutsController from '../app/controllers/workouts-plans/WorkoutsPlansWorkoutsController';
const workoutsPlansWorkoutsRoutes = Router();

workoutsPlansWorkoutsRoutes.get(
  '/workoutPlanWorkouts',
  WorkoutsPlansWorkoutsController.index
);

export default workoutsPlansWorkoutsRoutes;
