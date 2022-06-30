import { Request, Response } from 'express';

class DocumentsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new DocumentsRepository();
