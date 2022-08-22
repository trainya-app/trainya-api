import { Router } from 'express';
import ExercisesController from '../app/controllers/exercises/ExercisesController';
const exercisesRoutes = Router();

exercisesRoutes.get('/exercises', ExercisesController.index);

export default exercisesRoutes;
