"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Gyms_routes_1 = __importDefault(require("./routes/Gyms.routes"));
const Roles_routes_1 = __importDefault(require("./routes/Roles.routes"));
const Employees_routes_1 = __importDefault(require("./routes/Employees.routes"));
const GymEmployees_routes_1 = __importDefault(require("./routes/GymEmployees.routes"));
const Members_routes_1 = __importDefault(require("./routes/Members.routes"));
const GymMembers_routes_1 = __importDefault(require("./routes/GymMembers.routes"));
const Documents_routes_1 = __importDefault(require("./routes/Documents.routes"));
const Goals_routes_1 = __importDefault(require("./routes/Goals.routes"));
const MemberGoals_routes_1 = __importDefault(require("./routes/MemberGoals.routes"));
const Exercises_routes_1 = __importDefault(require("./routes/Exercises.routes"));
const WorkoutExercise_routes_1 = __importDefault(require("./routes/WorkoutExercise.routes"));
const Workouts_routes_1 = __importDefault(require("./routes/Workouts.routes"));
const WorkoutPlans_routes_1 = __importDefault(require("./routes/WorkoutPlans.routes"));
const WorkoutPlanWorkout_routes_1 = __importDefault(require("./routes/WorkoutPlanWorkout.routes"));
const MemberWorkoutPlans_routes_1 = __importDefault(require("./routes/MemberWorkoutPlans.routes"));
const Auth_routes_1 = __importDefault(require("./routes/Auth.routes"));
const AuthMiddleware_1 = __importDefault(require("./app/middlewares/AuthMiddleware"));
const Terms_routes_1 = __importDefault(require("./routes/Terms.routes"));
const PrivacyPolicies_routes_1 = __importDefault(require("./routes/PrivacyPolicies.routes"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const Months_routes_1 = __importDefault(require("./routes/Months.routes"));
const MemberMonthsDayProgress_routes_1 = __importDefault(require("./routes/MemberMonthsDayProgress.routes"));
const ErrorMiddleware_1 = __importDefault(require("./app/middlewares/ErrorMiddleware"));
const MemberPhotoProgress_routes_1 = __importDefault(require("./routes/MemberPhotoProgress.routes"));
const Files_routes_1 = __importDefault(require("./routes/Files.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.send('🔷 Trainya App');
});
// Login Routes
app.use(Auth_routes_1.default);
// Files
app.use(Files_routes_1.default);
// Auth verification
app.use(AuthMiddleware_1.default);
// Roles Routes
app.use(Roles_routes_1.default);
// Employees Routes
app.use(Employees_routes_1.default);
// Gyms Routes
app.use(Gyms_routes_1.default);
// Gym Employees Routes
app.use(GymEmployees_routes_1.default);
// Members Routes
app.use(Members_routes_1.default);
// Gym Members Routes
app.use(GymMembers_routes_1.default);
// Documents Routes
app.use(Documents_routes_1.default);
// Goals Routes
app.use(Goals_routes_1.default);
// Member Goals Routes
app.use(MemberGoals_routes_1.default);
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
// Months Routes
app.use(Months_routes_1.default);
// Member Months Day Progress Routes
app.use(MemberMonthsDayProgress_routes_1.default);
// Member photos progress
app.use(MemberPhotoProgress_routes_1.default);
// Terms Routes
app.use(body_parser_1.default.text());
app.use(Terms_routes_1.default);
// Privacy Routes
app.use(PrivacyPolicies_routes_1.default);
app.use(function (req, res, next) {
    req.setTimeout(240000, function () {
        res.send({ message: 'Erro de timeout' });
    });
    next();
});
app.use(ErrorMiddleware_1.default);
app.listen(PORT, () => console.log('🔥 Server Running! 🔥'));
