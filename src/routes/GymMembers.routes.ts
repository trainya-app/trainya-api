import { Router } from 'express';
import GymsMembersController from '../app/controllers/gyms/GymsMembersController';
const gymMembersRoutes = Router();

gymMembersRoutes.get('/gymMembers', GymsMembersController.index);
gymMembersRoutes.post('/gymMembers', GymsMembersController.store);
gymMembersRoutes.get('/gymMembers/:id', GymsMembersController.show);
gymMembersRoutes.delete('/gymMembers/:id', GymsMembersController.delete);
gymMembersRoutes.put('/gymMembers/:id', GymsMembersController.update);

export default gymMembersRoutes;
