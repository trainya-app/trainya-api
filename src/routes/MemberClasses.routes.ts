import { Router } from 'express';
import MembersClassesController from '../app/controllers/members/MembersClassesController';
const membersClassesRoutes = Router();

membersClassesRoutes.get('/memberClasses', MembersClassesController.index);
membersClassesRoutes.post('/memberClasses', MembersClassesController.store);
membersClassesRoutes.delete(
  '/memberClasses/:id',
  MembersClassesController.delete
);
membersClassesRoutes.get('/memberClasses/:id', MembersClassesController.show);

export default membersClassesRoutes;
