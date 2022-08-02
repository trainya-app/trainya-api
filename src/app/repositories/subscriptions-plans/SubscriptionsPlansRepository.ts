import { Request, Response } from 'express';

class SubscriptionsPlansRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new SubscriptionsPlansRepository();
