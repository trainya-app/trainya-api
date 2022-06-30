import { Request, Response } from 'express';

class SubscriptionsPlansController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new SubscriptionsPlansController();
