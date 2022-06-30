import { Request, Response } from 'express';

class MethodsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MethodsRepository();
