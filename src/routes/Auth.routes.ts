import { Router } from 'express';
import MemberAuthController from '../app/controllers/auth/MemberAuthController';
const authRoutes = Router();

authRoutes.post('/auth/members', MemberAuthController.authenticate);

export default authRoutes;
