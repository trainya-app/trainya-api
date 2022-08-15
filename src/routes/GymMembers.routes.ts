import { Router } from 'express';
import GymsMembersController from '../app/controllers/gyms/GymsMembersController';
const gymMembersRoutes = Router();

gymMembersRoutes.get('/gymMembers', GymsMembersController.index);
gymMembersRoutes.post('/gymMembers', GymsMembersController.store);

export default gymMembersRoutes;
