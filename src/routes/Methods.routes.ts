import { Router } from 'express';
const methodsRoutes = Router();
import MethodsController from '../app/controllers/methods/MethodsController';

methodsRoutes.get('/methods', MethodsController.index);

export default methodsRoutes;
