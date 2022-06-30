import { Request, Response } from 'express';

class MembersGoalsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersGoalsRepository();
