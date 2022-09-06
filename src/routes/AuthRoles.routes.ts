import { Router } from 'express';
import AuthRoleController from '../app/controllers/authRole/AuthRoleController';

const authRolesRoutes = Router();

authRolesRoutes.get('/authRoles', AuthRoleController.index);
authRolesRoutes.post('/authRoles', AuthRoleController.store);

export default authRolesRoutes;
