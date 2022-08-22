import { Router } from 'express';
import MembersStatisticsController from '../app/controllers/members/MembersStatisticsController';
const memberStatisticsRoutes = Router();

memberStatisticsRoutes.get(
  '/memberStatistics',
  MembersStatisticsController.index
);
memberStatisticsRoutes.post(
  '/memberStatistics',
  MembersStatisticsController.store
);
memberStatisticsRoutes.delete(
  '/memberStatistics/:id',
  MembersStatisticsController.delete
);
memberStatisticsRoutes.get(
  '/memberStatistics/:id',
  MembersStatisticsController.show
);
memberStatisticsRoutes.put(
  '/memberStatistics/:id',
  MembersStatisticsController.update
);

export default memberStatisticsRoutes;
