import { Router } from 'express';
import AuthRolePermissionsController from '../app/controllers/authRolePermissions/AuthRolePermissionsController';
const authRolePermissionsRoutes = Router();

authRolePermissionsRoutes.get(
  '/authRolePermissions',
  AuthRolePermissionsController.index
);

export default authRolePermissionsRoutes;
