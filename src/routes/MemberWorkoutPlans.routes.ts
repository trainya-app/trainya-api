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
membersWorkoutsPlansRoutes.delete(
  '/memberWorkoutPlans/:id',
  MembersWorkoutsPlansController.delete
);
membersWorkoutsPlansRoutes.get(
  '/memberWorkoutPlans/:id',
  MembersWorkoutsPlansController.show
);
membersWorkoutsPlansRoutes.put(
  '/memberWorkoutPlans/:id',
  MembersWorkoutsPlansController.update
);

export default membersWorkoutsPlansRoutes;
