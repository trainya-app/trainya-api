import { Request, Response } from 'express';

class MembersRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersRepository();