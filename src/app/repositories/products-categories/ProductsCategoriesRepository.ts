import { Request, Response } from 'express';

class ProductsCategoriesRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ProductsCategoriesRepository();
