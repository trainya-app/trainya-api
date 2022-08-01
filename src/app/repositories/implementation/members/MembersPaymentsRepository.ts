import { Request, Response } from 'express';

class MembersPaymentsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersPaymentsRepository();
