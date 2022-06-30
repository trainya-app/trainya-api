import { Request, Response } from 'express';

class SettingsOptionsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new SettingsOptionsController();
