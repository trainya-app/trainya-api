import { Request, Response } from 'express';

class ProductsCategoriesController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ProductsCategoriesController();
