import { Router } from 'express';
import MembersDocumentsController from '../app/controllers/members/MembersDocumentsController';
const memberDocumentsRoutes = Router();

memberDocumentsRoutes.get('/memberDocuments', MembersDocumentsController.index);

export default memberDocumentsRoutes;
