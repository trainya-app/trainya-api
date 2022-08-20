import { Router } from 'express';
import MembersPaymentsController from '../app/controllers/members/MembersPaymentsController';
const memberPaymentsRoutes = Router();

memberPaymentsRoutes.get('/memberPayments', MembersPaymentsController.index);

export default memberPaymentsRoutes;
