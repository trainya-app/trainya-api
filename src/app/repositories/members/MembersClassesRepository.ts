import { Request, Response } from 'express';

class MembersClassesRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersClassesRepository();
