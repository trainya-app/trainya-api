import { Request, Response } from 'express';

class GymsSubscriptionsPlansRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new GymsSubscriptionsPlansRepository();
