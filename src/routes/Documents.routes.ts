import { Router } from 'express';
import DocumentsController from '../app/controllers/documents/DocumentsController';
const documentsRoutes = Router();

documentsRoutes.get('/documents', DocumentsController.index);
documentsRoutes.post('/documents', DocumentsController.store);
documentsRoutes.delete('/documents/:id', DocumentsController.delete);
documentsRoutes.post('/documents/:id', DocumentsController.show);

export default documentsRoutes;
