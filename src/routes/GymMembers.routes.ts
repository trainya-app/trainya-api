import { Router } from 'express';
import GymsMembersController from '../app/controllers/gyms/GymsMembersController';
const gymMembersRoutes = Router();

gymMembersRoutes.get('/gymMembers', GymsMembersController.index);

export default gymMembersRoutes;
