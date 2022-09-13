import { Router } from 'express';
import MemberAuthController from '../app/controllers/auth/MemberAuthController';
import GymAuthController from '../app/controllers/auth/GymAuthController';
const authRoutes = Router();

authRoutes.post('/auth/members', MemberAuthController.authenticate);
authRoutes.post('/auth/gyms', GymAuthController.authenticate);

export default authRoutes;
