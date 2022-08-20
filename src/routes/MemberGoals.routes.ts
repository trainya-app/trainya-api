import { Router } from 'express';
import MembersGoalsController from '../app/controllers/members/MembersGoalsController';
const memberGoalsRoutes = Router();

memberGoalsRoutes.get('/memberGoals', MembersGoalsController.index);

export default memberGoalsRoutes;
