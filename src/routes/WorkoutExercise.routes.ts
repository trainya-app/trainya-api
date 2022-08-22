import { Router } from 'express';
import WorkoutsExercisesController from '../app/controllers/workouts/WorkoutsExercisesController';
const workoutExercisesRoutes = Router();

workoutExercisesRoutes.get(
  '/workoutExercises',
  WorkoutsExercisesController.index
);
workoutExercisesRoutes.post(
  '/workoutExercises',
  WorkoutsExercisesController.store
);
workoutExercisesRoutes.delete(
  '/workoutExercises/:id',
  WorkoutsExercisesController.delete
);
workoutExercisesRoutes.get(
  '/workoutExercises/:id',
  WorkoutsExercisesController.show
);
// workoutExercisesRoutes.put(
//   '/workoutExercises/:id',
//   WorkoutsExercisesController.update
// );

export default workoutExercisesRoutes;
