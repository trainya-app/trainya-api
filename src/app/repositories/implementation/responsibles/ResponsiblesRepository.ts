import { Request, Response } from 'express';

class ResponsiblesRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ResponsiblesRepository();
