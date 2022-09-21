import { Router } from 'express';
import TermsController from '../app/controllers/terms/TermsControllers';
const termsRoutes = Router();

termsRoutes.get('/terms', TermsController.index);
termsRoutes.post('/terms', TermsController.store);
termsRoutes.put('/terms', TermsController.update);

export default termsRoutes;
