"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const WorkoutsController_1 = __importDefault(require("../app/controllers/workouts/WorkoutsController"));
const workoutRoutes = (0, express_1.Router)();
workoutRoutes.get('/workouts', WorkoutsController_1.default.index);
workoutRoutes.post('/workouts', WorkoutsController_1.default.store);
workoutRoutes.delete('/workouts/:id', WorkoutsController_1.default.delete);
workoutRoutes.get('/workouts/:id', WorkoutsController_1.default.show);
workoutRoutes.put('/workouts/:id', WorkoutsController_1.default.update);
exports.default = workoutRoutes;
