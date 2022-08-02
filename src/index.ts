import express from 'express';
import ProductsCategoriesController from './app/controllers/products-categories/ProductsCategoriesController';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('🔷 Trainya App');
});

app.post('/products-categories', ProductsCategoriesController.create);

app.listen(PORT, () => console.log('🔥 Server Running! 🔥'));
