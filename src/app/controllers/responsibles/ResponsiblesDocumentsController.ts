import { Request, Response } from 'express';

class ResponsiblesDocumentsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ResponsiblesDocumentsController();
