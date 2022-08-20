import { Router } from 'express';
import MembersSettingsController from '../app/controllers/members/MembersSettingsController';

const memberSettingsRoutes = Router();

memberSettingsRoutes.get('/memberSettings', MembersSettingsController.index);

export default memberSettingsRoutes;
