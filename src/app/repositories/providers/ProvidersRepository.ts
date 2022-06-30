import { Request, Response } from 'express';

class ProvidersRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ProvidersRepository();
