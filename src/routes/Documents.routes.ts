import { Router } from 'express';
import DocumentsController from '../app/controllers/documents/DocumentsController';
const documentsRoutes = Router();

documentsRoutes.get('/documents', DocumentsController.index);

export default documentsRoutes;
