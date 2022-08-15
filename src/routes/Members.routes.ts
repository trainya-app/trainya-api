import { Router } from 'express';
import MembersController from '../app/controllers/members/MembersController';
const membersRoutes = Router();

membersRoutes.get('/members', MembersController.index);
membersRoutes.get('/members/:id', MembersController.show);
membersRoutes.post('/members', MembersController.store);
membersRoutes.delete('/members/:id', MembersController.delete);

export default membersRoutes;
