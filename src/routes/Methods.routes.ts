import { Router } from 'express';
const methodsRoutes = Router();
import MethodsController from '../app/controllers/methods/MethodsController';

methodsRoutes.get('/methods', MethodsController.index);
methodsRoutes.post('/methods', MethodsController.store);
// methodsRoutes.delete('/methods/:id', MethodsController.delete);
// methodsRoutes.get('/methods/:id', MethodsController.show);
// methodsRoutes.put('/methods/:id', MethodsController.update);

export default methodsRoutes;
