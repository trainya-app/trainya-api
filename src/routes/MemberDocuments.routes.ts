import { Router } from 'express';
import MembersDocumentsController from '../app/controllers/members/MembersDocumentsController';
const memberDocumentsRoutes = Router();

memberDocumentsRoutes.get('/memberDocuments', MembersDocumentsController.index);
memberDocumentsRoutes.post(
  '/memberDocuments',
  MembersDocumentsController.store
);
memberDocumentsRoutes.get(
  '/memberDocuments/:id',
  MembersDocumentsController.show
);
export default memberDocumentsRoutes;
