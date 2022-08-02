import { Router } from 'express';
import ProductsCategoriesController from '../app/controllers/products-categories/ProductsCategoriesController';

const productsCategoriesRoutes = Router();

productsCategoriesRoutes.post('/products-categories', ProductsCategoriesController.create);

export default productsCategoriesRoutes;
