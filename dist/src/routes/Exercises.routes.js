"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ExercisesController_1 = __importDefault(require("../app/controllers/exercises/ExercisesController"));
const exercisesRoutes = (0, express_1.Router)();
exercisesRoutes.get('/exercises', ExercisesController_1.default.index);
exercisesRoutes.post('/exercises', ExercisesController_1.default.store);
exercisesRoutes.delete('/exercises/:id', ExercisesController_1.default.delete);
exercisesRoutes.get('/exercises/:id', ExercisesController_1.default.show);
exercisesRoutes.put('/exercises/:id', ExercisesController_1.default.update);
exports.default = exercisesRoutes;
