import { Router } from 'express';
import MembersClassesController from '../app/controllers/members/MembersClassesController';
const membersClassesRoutes = Router();

membersClassesRoutes.get('/memberClasses', MembersClassesController.index);

export default membersClassesRoutes;
