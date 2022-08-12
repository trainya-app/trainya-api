import { Router } from 'express';
import MembersController from '../app/controllers/members/MembersController';
const membersRoutes = Router();

membersRoutes.get('/members', MembersController.index);

export default membersRoutes;
