import { Router } from 'express';
import SettingsOptionsController from '../app/controllers/settings-options/SettingsOptionsController';
const settingOptionsRoutes = Router();

settingOptionsRoutes.get('/settingOptions', SettingsOptionsController.index);
settingOptionsRoutes.post('/settingOptions', SettingsOptionsController.store);
// settingOptionsRoutes.delete('/settingOptions/:id', SettingsOptionsController.delete);
// settingOptionsRoutes.get('/settingOptions/:id', SettingsOptionsController.show);
// settingOptionsRoutes.put('/settingOptions/:id', SettingsOptionsController.update);

export default settingOptionsRoutes;
