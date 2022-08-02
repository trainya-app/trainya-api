import express from 'express';
import gymsRoutes from './routes/Gyms.routes';
import productsCategoriesRoutes from './routes/ProductsCategories.routes';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('🔷 Trainya App');
});

// Gyms Routes
app.use(gymsRoutes);

// ProductsCategories Routes
app.use(productsCategoriesRoutes);

app.listen(PORT, () => console.log('🔥 Server Running! 🔥'));
