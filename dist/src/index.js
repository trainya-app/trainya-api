"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Gyms_routes_1 = __importDefault(require("./routes/Gyms.routes"));
const Rolls_routes_1 = __importDefault(require("./routes/Rolls.routes"));
const ProductsCategories_routes_1 = __importDefault(require("./routes/ProductsCategories.routes"));
const Employees_routes_1 = __importDefault(require("./routes/Employees.routes"));
const GymEmployees_routes_1 = __importDefault(require("./routes/GymEmployees.routes"));
const Members_routes_1 = __importDefault(require("./routes/Members.routes"));
const GymMembers_routes_1 = __importDefault(require("./routes/GymMembers.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.send('🔷 Trainya App');
});
// Rolls Routes
app.use(Rolls_routes_1.default);
//Employees Routes
app.use(Employees_routes_1.default);
// Gyms Routes
app.use(Gyms_routes_1.default);
// ProductsCategories Routes
app.use(ProductsCategories_routes_1.default);
// Gym Employees Routes
app.use(GymEmployees_routes_1.default);
//Members Routes
app.use(Members_routes_1.default);
//Gym Members Routes
app.use(GymMembers_routes_1.default);
app.listen(PORT, () => console.log('🔥 Server Running! 🔥'));
