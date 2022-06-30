import { Request, Response } from 'express';

class MembersSettingsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersSettingsController();
