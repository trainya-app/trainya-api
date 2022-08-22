import express from 'express';
import gymsRoutes from './routes/Gyms.routes';
import rollsRoutes from './routes/Rolls.routes';
import productsCategoriesRoutes from './routes/ProductsCategories.routes';
import employeesRoutes from './routes/Employees.routes';
import gymEmployeesRoutes from './routes/GymEmployees.routes';
import membersRoutes from './routes/Members.routes';
import gymMembersRoutes from './routes/GymMembers.routes';
import documentsRoutes from './routes/Documents.routes';
import memberDocumentsRoutes from './routes/MemberDocuments.routes';
import goalsRoutes from './routes/Goals.routes';
import memberGoalsRoutes from './routes/MemberGoals.routes';
import settingOptionsRoutes from './routes/SettingOptions.routes';
import memberSettingsRoutes from './routes/MemberSettings.routes';
import methodsRoutes from './routes/Methods.routes';
import memberPaymentsRoutes from './routes/MemberPayments.routes';
import exercisesRoutes from './routes/Exercises.routes';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('🔷 Trainya App');
});

// Rolls Routes
app.use(rollsRoutes);
// Employees Routes
app.use(employeesRoutes);
// Gyms Routes
app.use(gymsRoutes);
// ProductsCategories Routes
app.use(productsCategoriesRoutes);
// Gym Employees Routes
app.use(gymEmployeesRoutes);
// Members Routes
app.use(membersRoutes);
// Gym Members Routes
app.use(gymMembersRoutes);
// Documents Routes
app.use(documentsRoutes);
// Member documents Routes
app.use(memberDocumentsRoutes);
// Goals Routes
app.use(goalsRoutes);
// Member Goals Routes
app.use(memberGoalsRoutes);
// Setting Options Routes
app.use(settingOptionsRoutes);
// Member Settings Routes
app.use(memberSettingsRoutes);
// Methods Routes
app.use(methodsRoutes);
// Member Payments Routes
app.use(memberPaymentsRoutes);
// Exercises Routes
app.use(exercisesRoutes);

app.listen(PORT, () => console.log('🔥 Server Running! 🔥'));
