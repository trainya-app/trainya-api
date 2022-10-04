import { Router } from 'express';
import GymsController from '../app/controllers/gyms/GymsController';

const gymsRoutes = Router();

gymsRoutes.get('/gyms', GymsController.index);
gymsRoutes.post('/gyms', GymsController.store);
gymsRoutes.delete('/gyms/:id', GymsController.delete);
gymsRoutes.get('/gyms/:id', GymsController.show);
gymsRoutes.put('/gyms/password/:id', GymsController.updatePassword);
gymsRoutes.put('/gyms/:id', GymsController.update);
gymsRoutes.put(
  '/gyms/capacity/:gymId/:memberId/:monthId',
  GymsController.updateCapacity
);
gymsRoutes.get('/gyms-member', GymsController.showByMember);

export default gymsRoutes;
