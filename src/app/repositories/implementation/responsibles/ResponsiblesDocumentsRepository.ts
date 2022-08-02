import { Request, Response } from 'express';

class ResponsiblesDocumentsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ResponsiblesDocumentsRepository();
