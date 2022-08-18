import express from 'express';
import gymsRoutes from './routes/Gyms.routes';
import rollsRoutes from './routes/Rolls.routes';
import productsCategoriesRoutes from './routes/ProductsCategories.routes';
import employeesRoutes from './routes/Employees.routes';
import gymEmployeesRoutes from './routes/GymEmployees.routes';
import membersRoutes from './routes/Members.routes';
import gymMembersRoutes from './routes/GymMembers.routes';

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('🔷 Trainya App');
});

// Rolls Routes
app.use(rollsRoutes);
//Employees Routes
app.use(employeesRoutes);
// Gyms Routes
app.use(gymsRoutes);
// ProductsCategories Routes
app.use(productsCategoriesRoutes);
// Gym Employees Routes
app.use(gymEmployeesRoutes);
//Members Routes
app.use(membersRoutes);

//Gym Members Routes
app.use(gymMembersRoutes);

app.listen(PORT, () => console.log('🔥 Server Running! 🔥'));
