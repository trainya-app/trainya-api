import { Router } from 'express';
import WorkoutsExercisesController from '../app/controllers/workouts/WorkoutsExercisesController';
const workoutsExercisesRoutes = Router();

workoutsExercisesRoutes.get(
  '/workoutExercises',
  WorkoutsExercisesController.index
);
// workoutsExercisesRoutes.post(
//   '/workoutExercises',
//   WorkoutsExercisesController.store
// );
// workoutsExercisesRoutes.delete(
//   '/workoutExercises/:id',
//   WorkoutsExercisesController.delete
// );
// workoutsExercisesRoutes.get(
//   '/workoutExercises/:id',
//   WorkoutsExercisesController.show
// );
// workoutsExercisesRoutes.put(
//   '/workoutExercises/:id',
//   WorkoutsExercisesController.update
// );

export default workoutsExercisesRoutes;
