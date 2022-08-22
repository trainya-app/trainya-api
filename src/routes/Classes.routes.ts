import { Router } from 'express';
import ClassesController from '../app/controllers/classes/ClassesController';
const classesRoutes = Router();

classesRoutes.get('/classes', ClassesController.index);

export default classesRoutes;
