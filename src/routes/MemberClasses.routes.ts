import { Router } from 'express';
import MembersClassesController from '../app/controllers/members/MembersClassesController';
const membersClassesRoutes = Router();

membersClassesRoutes.get('/memberClasses', MembersClassesController.index);
membersClassesRoutes.post('/memberClasses', MembersClassesController.store);

export default membersClassesRoutes;
