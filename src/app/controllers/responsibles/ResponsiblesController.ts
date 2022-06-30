import { Request, Response } from 'express';

class ResponsiblesController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ResponsiblesController();
