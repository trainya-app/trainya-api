import { Router } from 'express';
import MemberAuthController from '../app/controllers/auth/MemberAuthController';
import GymAuthController from '../app/controllers/auth/EmployeeAuthController';
const authRoutes = Router();

authRoutes.post('/auth/members', MemberAuthController.authenticate);
authRoutes.post('/auth/employees', GymAuthController.authenticate);

export default authRoutes;
