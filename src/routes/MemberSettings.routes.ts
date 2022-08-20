import { Router } from 'express';
import MembersSettingsController from '../app/controllers/members/MembersSettingsController';

const memberSettingsRoutes = Router();

memberSettingsRoutes.get('/memberSettings', MembersSettingsController.index);
memberSettingsRoutes.post('/memberSettings', MembersSettingsController.store);
// memberSettingsRoutes.delete('/memberSettings/:id', MembersSettingsController.delete);
// memberSettingsRoutes.get('/memberSettings/:id', MembersSettingsController.show);
// memberSettingsRoutes.put('/memberSettings/:id', MembersSettingsController.update);

export default memberSettingsRoutes;
