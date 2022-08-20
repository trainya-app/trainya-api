import { Router } from 'express';
import MembersPaymentsController from '../app/controllers/members/MembersPaymentsController';
const memberPaymentsRoutes = Router();

memberPaymentsRoutes.get('/memberPayments', MembersPaymentsController.index);
memberPaymentsRoutes.post('/memberPayments', MembersPaymentsController.store);
memberPaymentsRoutes.delete(
  '/memberPayments/:id',
  MembersPaymentsController.delete
);
memberPaymentsRoutes.get('/memberPayments/:id', MembersPaymentsController.show);
memberPaymentsRoutes.put(
  '/memberPayments/:id',
  MembersPaymentsController.update
);

export default memberPaymentsRoutes;
