import express from 'express';
import gymsRoutes from './routes/Gyms.routes';
import rollsRoutes from './routes/Rolls.routes';
import productsCategoriesRoutes from './routes/ProductsCategories.routes';
import gymMembersRoutes from './routes/GymMembers.routes';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('🔷 Trainya App');
});

// Rolls Routes
app.use(rollsRoutes);

// Gyms Routes
app.use(gymsRoutes);

// ProductsCategories Routes
app.use(productsCategoriesRoutes);

//Gym Members Routes
app.use(gymMembersRoutes);

app.listen(PORT, () => console.log('🔥 Server Running! 🔥'));
