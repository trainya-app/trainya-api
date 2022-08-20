"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const goalsRoutes = (0, express_1.Router)();
const GoalsController_1 = __importDefault(require("../app/controllers/goals/GoalsController"));
goalsRoutes.get('/goals', GoalsController_1.default.index);
goalsRoutes.get('/goals/:id', GoalsController_1.default.show);
goalsRoutes.post('/goals', GoalsController_1.default.store);
goalsRoutes.put('/goals/:id', GoalsController_1.default.update);
goalsRoutes.delete('/goals/:id', GoalsController_1.default.delete);
exports.default = goalsRoutes;
