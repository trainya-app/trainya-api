import { Router } from 'express';
import ProductsCategoriesController from '../app/controllers/products-categories/ProductsCategoriesController';
const productsCategoriesRoutes = Router();
import MulterMiddleware from '../app/middlewares/MulterMiddleware';

productsCategoriesRoutes.post(
  '/products-categories',
  MulterMiddleware.single('image'),
  ProductsCategoriesController.create
);

export default productsCategoriesRoutes;
