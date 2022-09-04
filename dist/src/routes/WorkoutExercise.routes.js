"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const WorkoutsExercisesController_1 = __importDefault(require("../app/controllers/workouts/WorkoutsExercisesController"));
const workoutExercisesRoutes = (0, express_1.Router)();
workoutExercisesRoutes.get('/workoutExercises', WorkoutsExercisesController_1.default.index);
workoutExercisesRoutes.post('/workoutExercises', WorkoutsExercisesController_1.default.store);
workoutExercisesRoutes.delete('/workoutExercises/:id', WorkoutsExercisesController_1.default.delete);
workoutExercisesRoutes.get('/workoutExercises/:id', WorkoutsExercisesController_1.default.show);
workoutExercisesRoutes.put('/workoutExercises/:id', WorkoutsExercisesController_1.default.update);
exports.default = workoutExercisesRoutes;
