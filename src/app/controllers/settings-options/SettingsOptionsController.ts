import { Request, Response } from 'express';
import SettingsOptionsRepository from '../../repositories/settings-options/SettingsOptionsRepository';

class SettingsOptionsController {
  async index(req: Request, res: Response) {
    const settingsOptions = await SettingsOptionsRepository.findAll();
    return res.send({ settingsOptions });
  }
}

export default new SettingsOptionsController();
