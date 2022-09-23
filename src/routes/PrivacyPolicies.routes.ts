import { Router } from 'express';
import PrivacyPoliciesController from '../app/controllers/privacyPolicies/PrivacyPoliciesController';

const privacyPoliciesRoutes = Router();

privacyPoliciesRoutes.get('/privacy', PrivacyPoliciesController.index);
privacyPoliciesRoutes.post('/privacy', PrivacyPoliciesController.store);
privacyPoliciesRoutes.put('/privacy', PrivacyPoliciesController.update);

export default privacyPoliciesRoutes;
