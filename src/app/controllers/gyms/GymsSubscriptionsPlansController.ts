import { Request, Response } from 'express';

class GymsSubscriptionsPlansController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new GymsSubscriptionsPlansController();
