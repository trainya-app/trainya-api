import { Request, Response } from 'express';

class ProductsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new ProductsRepository();
