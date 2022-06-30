import { Request, Response } from 'express';

class MembersGoalsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersGoalsController();
