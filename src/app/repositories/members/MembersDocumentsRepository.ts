import { Request, Response } from 'express';

class MembersDocumentsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersDocumentsRepository();
