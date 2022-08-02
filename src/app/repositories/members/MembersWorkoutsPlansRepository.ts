import { Request, Response } from 'express';

class MembersWorkoutsPlansRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersWorkoutsPlansRepository();
