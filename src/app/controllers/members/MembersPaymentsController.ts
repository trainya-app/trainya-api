import { Request, Response } from 'express';

class MembersPaymentsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersPaymentsController();
