import { Request, Response } from 'express';

class ClassesController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ClassesController();
