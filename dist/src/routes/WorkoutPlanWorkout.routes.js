"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const WorkoutsPlansWorkoutsController_1 = __importDefault(require("../app/controllers/workouts-plans/WorkoutsPlansWorkoutsController"));
const workoutsPlansWorkoutsRoutes = (0, express_1.Router)();
workoutsPlansWorkoutsRoutes.get('/workoutPlanWorkouts', WorkoutsPlansWorkoutsController_1.default.index);
workoutsPlansWorkoutsRoutes.post('/workoutPlanWorkouts', WorkoutsPlansWorkoutsController_1.default.store);
workoutsPlansWorkoutsRoutes.delete('/workoutPlanWorkouts/:id', WorkoutsPlansWorkoutsController_1.default.delete);
workoutsPlansWorkoutsRoutes.get('/workoutPlanWorkouts/:id', WorkoutsPlansWorkoutsController_1.default.show);
workoutsPlansWorkoutsRoutes.put('/workoutPlanWorkouts/:id', WorkoutsPlansWorkoutsController_1.default.update);
exports.default = workoutsPlansWorkoutsRoutes;
