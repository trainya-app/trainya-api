import { Router } from 'express';
import AuthPermissionController from '../app/controllers/authPermissions/AuthPermissionController';
const authPermissionsRoutes = Router();

authPermissionsRoutes.get('/authPermissions', AuthPermissionController.index);
authPermissionsRoutes.post('/authPermissions', AuthPermissionController.store);

export default authPermissionsRoutes;
