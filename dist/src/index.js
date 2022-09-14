"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Gyms_routes_1 = __importDefault(require("./routes/Gyms.routes"));
const Roles_routes_1 = __importDefault(require("./routes/Roles.routes"));
const ProductsCategories_routes_1 = __importDefault(require("./routes/ProductsCategories.routes"));
const Employees_routes_1 = __importDefault(require("./routes/Employees.routes"));
const GymEmployees_routes_1 = __importDefault(require("./routes/GymEmployees.routes"));
const Members_routes_1 = __importDefault(require("./routes/Members.routes"));
const GymMembers_routes_1 = __importDefault(require("./routes/GymMembers.routes"));
const Documents_routes_1 = __importDefault(require("./routes/Documents.routes"));
const MemberDocuments_routes_1 = __importDefault(require("./routes/MemberDocuments.routes"));
const Goals_routes_1 = __importDefault(require("./routes/Goals.routes"));
const MemberGoals_routes_1 = __importDefault(require("./routes/MemberGoals.routes"));
const SettingOptions_routes_1 = __importDefault(require("./routes/SettingOptions.routes"));
const MemberSettings_routes_1 = __importDefault(require("./routes/MemberSettings.routes"));
const Methods_routes_1 = __importDefault(require("./routes/Methods.routes"));
const MemberPayments_routes_1 = __importDefault(require("./routes/MemberPayments.routes"));
const Exercises_routes_1 = __importDefault(require("./routes/Exercises.routes"));
const WorkoutExercise_routes_1 = __importDefault(require("./routes/WorkoutExercise.routes"));
const Workouts_routes_1 = __importDefault(require("./routes/Workouts.routes"));
const WorkoutPlans_routes_1 = __importDefault(require("./routes/WorkoutPlans.routes"));
const WorkoutPlanWorkout_routes_1 = __importDefault(require("./routes/WorkoutPlanWorkout.routes"));
const MemberWorkoutPlans_routes_1 = __importDefault(require("./routes/MemberWorkoutPlans.routes"));
const Statistics_routes_1 = __importDefault(require("./routes/Statistics.routes"));
const MemberStatistics_routes_1 = __importDefault(require("./routes/MemberStatistics.routes"));
const WeekDays_routes_1 = __importDefault(require("./routes/WeekDays.routes"));
const Classes_routes_1 = __importDefault(require("./routes/Classes.routes"));
const ClassesWeekDay_routes_1 = __importDefault(require("./routes/ClassesWeekDay.routes"));
const MemberClasses_routes_1 = __importDefault(require("./routes/MemberClasses.routes"));
const Auth_routes_1 = __importDefault(require("./routes/Auth.routes"));
const AuthMiddleware_1 = __importDefault(require("./app/middlewares/AuthMiddleware"));
const AuthRoles_routes_1 = __importDefault(require("./routes/AuthRoles.routes"));
const AuthPermissions_routes_1 = __importDefault(require("./routes/AuthPermissions.routes"));
const ACL_routes_1 = __importDefault(require("./routes/ACL.routes"));
const AuthRolePermission_routes_1 = __importDefault(require("./routes/AuthRolePermission.routes"));
// import cors from 'cors';
const app = (0, express_1.default)();
// app.use(cors());
app.use(express_1.default.json());
const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.send('🔷 Trainya App');
});
// Login Routes
app.use(Auth_routes_1.default);
// Auth verification
app.use(AuthMiddleware_1.default);
// Roles Routes
app.use(Roles_routes_1.default);
// Employees Routes
app.use(Employees_routes_1.default);
// Gyms Routes
app.use(Gyms_routes_1.default);
// ProductsCategories Routes
app.use(ProductsCategories_routes_1.default);
// Gym Employees Routes
app.use(GymEmployees_routes_1.default);
// Members Routes
app.use(Members_routes_1.default);
// Gym Members Routes
app.use(GymMembers_routes_1.default);
// Documents Routes
app.use(Documents_routes_1.default);
// Member documents Routes
app.use(MemberDocuments_routes_1.default);
// Goals Routes
app.use(Goals_routes_1.default);
// Member Goals Routes
app.use(MemberGoals_routes_1.default);
// Setting Options Routes
app.use(SettingOptions_routes_1.default);
// Member Settings Routes
app.use(MemberSettings_routes_1.default);
// Methods Routes
app.use(Methods_routes_1.default);
// Member Payments Routes
app.use(MemberPayments_routes_1.default);
// Exercises Routes
app.use(Exercises_routes_1.default);
// Workout Exercises Routes
app.use(WorkoutExercise_routes_1.default);
// Workouts Routes
app.use(Workouts_routes_1.default);
// Workouts Plans Routes
app.use(WorkoutPlans_routes_1.default);
// Workouts Plans Workouts Routes
app.use(WorkoutPlanWorkout_routes_1.default);
// Members Workouts Plans Routes
app.use(MemberWorkoutPlans_routes_1.default);
// Statistics Routes
app.use(Statistics_routes_1.default);
// Member Statistics Routes
app.use(MemberStatistics_routes_1.default);
// Week Days Routes
app.use(WeekDays_routes_1.default);
// Classes Routes
app.use(Classes_routes_1.default);
// Classes Week Days Routes
app.use(ClassesWeekDay_routes_1.default);
// Members Classes Routes
app.use(MemberClasses_routes_1.default);
// Auth Role Routes
app.use(AuthRoles_routes_1.default);
// Auth Permision Routes
app.use(AuthPermissions_routes_1.default);
// ACL Routes
app.use(ACL_routes_1.default);
// Auth Role Permission Routes
app.use(AuthRolePermission_routes_1.default);
app.listen(PORT, () => console.log('🔥 Server Running! 🔥'));
