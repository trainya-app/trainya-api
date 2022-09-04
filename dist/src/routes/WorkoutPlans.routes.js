"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const WorkoutsPlansController_1 = __importDefault(require("../app/controllers/workouts-plans/WorkoutsPlansController"));
const workoutPlanRoutes = (0, express_1.Router)();
workoutPlanRoutes.get('/workoutPlans', WorkoutsPlansController_1.default.index);
workoutPlanRoutes.post('/workoutPlans', WorkoutsPlansController_1.default.store);
workoutPlanRoutes.delete('/workoutPlans/:id', WorkoutsPlansController_1.default.delete);
workoutPlanRoutes.get('/workoutPlans/:id', WorkoutsPlansController_1.default.show);
workoutPlanRoutes.put('/workoutPlans/:id', WorkoutsPlansController_1.default.update);
exports.default = workoutPlanRoutes;
