import { Router } from 'express';
import MembersController from '../app/controllers/members/MembersController';
const membersRoutes = Router();
import MulterMiddleware from '../app/middlewares/MulterMiddleware';
import {uploadAvatar} from '../services/firebase';

membersRoutes.get('/members', MembersController.index);
membersRoutes.get('/members/:id', MembersController.show);
membersRoutes.post('/members', MembersController.store);
membersRoutes.delete('/members/:id', MembersController.delete);
membersRoutes.put('/members/password/:id', MembersController.updatePassword);
membersRoutes.put('/members/:id', MembersController.update);
membersRoutes.put(
  '/members-avatar',
  MulterMiddleware.single('avatar'),
  uploadAvatar,
  MembersController.uploadAvatar
);
membersRoutes.get('/member-workouts', MembersController.showWorkouts);
membersRoutes.post('/member-finish-workout', MembersController.finishWorkout);
membersRoutes.get('/member-finished-workouts', MembersController.finishedWorkouts);
membersRoutes.delete('/member-finished-workouts/:id', MembersController.deleteFinishedWorkout);
membersRoutes.get('/member-gymClasses', MembersController.showClassesByGym);
membersRoutes.get('/member-classes', MembersController.showClassesByMember);

export default membersRoutes;
