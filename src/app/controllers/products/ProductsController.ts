import { Request, Response } from 'express';

class ProductsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ProductsController();
