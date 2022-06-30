import { Request, Response } from 'express';

class MethodsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new MethodsController();
