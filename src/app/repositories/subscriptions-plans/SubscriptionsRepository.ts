import { Request, Response } from 'express';

class SubscriptionsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new SubscriptionsRepository();
