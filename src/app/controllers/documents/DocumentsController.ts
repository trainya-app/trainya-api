import { Request, Response } from 'express';

class DocumentsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new DocumentsController();
