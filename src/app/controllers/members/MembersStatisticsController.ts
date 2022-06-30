import { Request, Response } from 'express';

class MembersStatisticsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersStatisticsController();
