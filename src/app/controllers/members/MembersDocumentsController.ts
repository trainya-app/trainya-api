import { Request, Response } from 'express';

class MembersDocumentsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MembersDocumentsController();
