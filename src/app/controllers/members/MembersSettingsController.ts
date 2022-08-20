import { Request, Response } from 'express';
import MembersSettingsRepository from '../../repositories/members/MembersSettingsRepository';

class MembersSettingsController {
  async index(req: Request, res: Response) {
    const memberSettings = await MembersSettingsRepository.findAll();
    return res.send({ memberSettings });
  }
}

export default new MembersSettingsController();
