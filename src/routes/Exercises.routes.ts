import { Router } from 'express';
import ExercisesController from '../app/controllers/exercises/ExercisesController';
const exercisesRoutes = Router();

import MulterMiddleware from '../app/middlewares/MulterMiddleware';
import { uploadFiles } from '../services/firebase';

exercisesRoutes.get('/exercises', ExercisesController.index);
exercisesRoutes.post(
  '/exercises',
  MulterMiddleware.single('video'),
  uploadFiles,
  ExercisesController.store
);
exercisesRoutes.delete('/exercises/:id', ExercisesController.delete);
exercisesRoutes.get('/exercises/:id', ExercisesController.show);
exercisesRoutes.put('/exercises/:id', ExercisesController.update);

export default exercisesRoutes;
