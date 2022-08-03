import { Router } from 'express';
import GymsController from '../app/controllers/gyms/GymsController';

const gymsRoutes = Router();

gymsRoutes.get('/gyms', GymsController.index);
gymsRoutes.post('/gyms', GymsController.store);
gymsRoutes.delete('/gyms/:id', GymsController.delete);
gymsRoutes.get('/gyms/:id', GymsController.show);

export default gymsRoutes;
