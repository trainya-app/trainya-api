import { Router } from 'express';
import ClassesController from '../app/controllers/classes/ClassesController';
const classesRoutes = Router();

classesRoutes.get('/classes', ClassesController.index);
classesRoutes.post('/classes', ClassesController.create);
classesRoutes.delete('/classes/:id', ClassesController.delete);
classesRoutes.get('/classes/:id', ClassesController.show);
classesRoutes.put('/classes/:id', ClassesController.update);

export default classesRoutes;
