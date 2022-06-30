import { Request, Response } from 'express';

class SUbscriptionsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new SUbscriptionsController();
