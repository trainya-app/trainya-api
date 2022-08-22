import { Router } from 'express';
import MembersWorkoutsPlansController from '../app/controllers/members/MembersWorkoutsPlansController';
const membersWorkoutsPlansRoutes = Router();

membersWorkoutsPlansRoutes.get(
  '/memberWorkoutPlans',
  MembersWorkoutsPlansController.index
);

export default membersWorkoutsPlansRoutes;
