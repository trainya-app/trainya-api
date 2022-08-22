import { Router } from 'express';
import WorkoutsPlansWorkoutsController from '../app/controllers/workouts-plans/WorkoutsPlansWorkoutsController';
const workoutsPlansWorkoutsRoutes = Router();

workoutsPlansWorkoutsRoutes.get(
  '/workoutPlanWorkouts',
  WorkoutsPlansWorkoutsController.index
);
workoutsPlansWorkoutsRoutes.post(
  '/workoutPlanWorkouts',
  WorkoutsPlansWorkoutsController.store
);
workoutsPlansWorkoutsRoutes.delete(
  '/workoutPlanWorkouts/:id',
  WorkoutsPlansWorkoutsController.delete
);
workoutsPlansWorkoutsRoutes.get(
  '/workoutPlanWorkouts/:id',
  WorkoutsPlansWorkoutsController.show
);
workoutsPlansWorkoutsRoutes.put(
  '/workoutPlanWorkouts/:id',
  WorkoutsPlansWorkoutsController.update
);

export default workoutsPlansWorkoutsRoutes;
