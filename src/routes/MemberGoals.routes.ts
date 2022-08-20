import { Router } from 'express';
import MembersGoalsController from '../app/controllers/members/MembersGoalsController';
const memberGoalsRoutes = Router();

memberGoalsRoutes.get('/memberGoals', MembersGoalsController.index);
memberGoalsRoutes.post('/memberGoals', MembersGoalsController.store);
memberGoalsRoutes.delete('/memberGoals/:id', MembersGoalsController.delete);
memberGoalsRoutes.get('/memberGoals/:id', MembersGoalsController.show);
// memberGoalsRoutes.put('/memberGoals/:id', MembersGoalsController.update);

export default memberGoalsRoutes;
