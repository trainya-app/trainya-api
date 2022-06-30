import { Request, Response } from 'express';

class MembersClassesController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersClassesController();
