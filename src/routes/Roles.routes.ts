import { Router } from 'express';
import RolesController from '../app/controllers/roles/RollsController';
const rolesRoutes = Router();

rolesRoutes.get('/roles', RolesController.index);
rolesRoutes.post('/roles', RolesController.store);
rolesRoutes.delete('/roles/:id', RolesController.delete);
rolesRoutes.get('/roles/:id', RolesController.show);
rolesRoutes.put('/roles/:id', RolesController.update);

export default rolesRoutes;
