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
memberMonthsDayProgressRoutes.delete(
  '/memberMonthsDayProgressRoutes/:id',
  MemberMonthsDayProgressController.deleteAllByMember
);
memberMonthsDayProgressRoutes.get(
  '/memberMonthsDayProgressRoutes-member',
  MemberMonthsDayProgressController.showByMember
);

export default memberMonthsDayProgressRoutes;
