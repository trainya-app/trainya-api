import { Request, Response } from 'express';

class ProvidersController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ProvidersController();
