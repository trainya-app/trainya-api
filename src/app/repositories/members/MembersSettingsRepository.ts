import { Request, Response } from 'express';

class MembersSettingsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersSettingsRepository();
