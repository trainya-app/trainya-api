import { Request, Response } from 'express';

class MembersWorkoutsPlansController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersWorkoutsPlansController();
