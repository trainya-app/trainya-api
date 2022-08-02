import { Request, Response } from 'express';
import ProductsCategoriesRepository from '../../repositories/products-categories/ProductsCategoriesRepository';

class ProductsCategoriesController {
  async create(req: Request, res: Response) {
    const { name, image_url } = req.body;

    const productCategory = await ProductsCategoriesRepository.create({
      name,
      image_url,
    });

    return res.send({ created: productCategory });
  }
}

export default new ProductsCategoriesController();
