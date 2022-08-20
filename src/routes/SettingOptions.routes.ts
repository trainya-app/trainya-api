import { Router } from 'express';
import SettingsOptionsController from '../app/controllers/settings-options/SettingsOptionsController';
const settingOptionsRoutes = Router();

settingOptionsRoutes.get('/settingOptions', SettingsOptionsController.index);

export default settingOptionsRoutes;
