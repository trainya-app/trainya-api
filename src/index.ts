import express from 'express';
import gymsRoutes from './routes/Gyms.routes';
import rolesRoutes from './routes/Roles.routes';
import employeesRoutes from './routes/Employees.routes';
import gymEmployeesRoutes from './routes/GymEmployees.routes';
import membersRoutes from './routes/Members.routes';
import gymMembersRoutes from './routes/GymMembers.routes';
import documentsRoutes from './routes/Documents.routes';
import goalsRoutes from './routes/Goals.routes';
import memberGoalsRoutes from './routes/MemberGoals.routes';
import exercisesRoutes from './routes/Exercises.routes';
import workoutExercisesRoutes from './routes/WorkoutExercise.routes';
import workoutsRoutes from './routes/Workouts.routes';
import workoutsPlanRoutes from './routes/WorkoutPlans.routes';
import workoutsPlansWorkoutsRoutes from './routes/WorkoutPlanWorkout.routes';
import membersWorkoutsPlansRoutes from './routes/MemberWorkoutPlans.routes';
import authRoutes from './routes/Auth.routes';
import AuthMiddleware from './app/middlewares/AuthMiddleware';
import termsRoutes from './routes/Terms.routes';
import privacyPoliciesRoutes from './routes/PrivacyPolicies.routes';
import cors from 'cors';
import bodyParser from 'body-parser';
import monthsRoutes from './routes/Months.routes';
import memberMonthsDayProgressRoutes from './routes/MemberMonthsDayProgress.routes';
import ErrorMiddleware from './app/middlewares/ErrorMiddleware';
import memberPhotoProgress from './routes/MemberPhotoProgress.routes';
import filesRoutes from './routes/Files.routes';
import * as Sentry from '@sentry/node';

const app = express();

Sentry.init({
  dsn: 'https://91ace0cc11ae4f81b87bba6162c1e8a0@o4504117572927488.ingest.sentry.io/4504117576466432',
});

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send('🔷 Trainya App');
});
// Login Routes
app.use(authRoutes);
// Files
app.use(filesRoutes);
// Auth verification
app.use(AuthMiddleware);
// Roles Routes
app.use(rolesRoutes);
// Employees Routes
app.use(employeesRoutes);
// Gyms Routes
app.use(gymsRoutes);
// Gym Employees Routes
app.use(gymEmployeesRoutes);
// Members Routes
app.use(membersRoutes);
// Gym Members Routes
app.use(gymMembersRoutes);
// Documents Routes
app.use(documentsRoutes);
// Goals Routes
app.use(goalsRoutes);
// Member Goals Routes
app.use(memberGoalsRoutes);
// Exercises Routes
app.use(exercisesRoutes);
// Workout Exercises Routes
app.use(workoutExercisesRoutes);
// Workouts Routes
app.use(workoutsRoutes);
// Workouts Plans Routes
app.use(workoutsPlanRoutes);
// Workouts Plans Workouts Routes
app.use(workoutsPlansWorkoutsRoutes);
// Members Workouts Plans Routes
app.use(membersWorkoutsPlansRoutes);
// Months Routes
app.use(monthsRoutes);
// Member Months Day Progress Routes
app.use(memberMonthsDayProgressRoutes);
// Member photos progress
app.use(memberPhotoProgress);
// Terms Routes
app.use(bodyParser.text());
app.use(termsRoutes);
// Privacy Routes
app.use(privacyPoliciesRoutes);

app.use(function(req, res, next){
    req.setTimeout(240000, function(){
      res.send({ message: 'Erro de timeout'})
    });

    next();
});
app.use(ErrorMiddleware);


app.listen(PORT, () => console.log('🔥 Server Running! 🔥'));
