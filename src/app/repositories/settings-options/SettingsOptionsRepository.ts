import { Request, Response } from 'express';

class SettingsOptionsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new SettingsOptionsRepository();
