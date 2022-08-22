import { Router } from 'express';
import MembersWorkoutsPlansController from '../app/controllers/members/MembersWorkoutsPlansController';
const membersWorkoutsPlansRoutes = Router();

membersWorkoutsPlansRoutes.get(
  '/memberWorkoutPlans',
  MembersWorkoutsPlansController.index
);
membersWorkoutsPlansRoutes.post(
  '/memberWorkoutPlans',
  MembersWorkoutsPlansController.store
);

export default membersWorkoutsPlansRoutes;
