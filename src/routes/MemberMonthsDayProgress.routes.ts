import { Router } from 'express';
import MemberMonthsDayProgressController from '../app/controllers/members/MemberMonthsDayProgressController';
const memberMonthsDayProgressRoutes = Router();

memberMonthsDayProgressRoutes.get(
  '/memberMonthsDayProgressRoutes',
  MemberMonthsDayProgressController.index
);
memberMonthsDayProgressRoutes.post(
  '/memberMonthsDayProgressRoutes',
  MemberMonthsDayProgressController.store
);

export default memberMonthsDayProgressRoutes;
