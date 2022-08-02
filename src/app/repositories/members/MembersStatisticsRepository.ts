import { Request, Response } from 'express';

class MembersStatisticsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersStatisticsRepository();
