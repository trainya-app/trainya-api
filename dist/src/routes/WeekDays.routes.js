"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const WeekDaysController_1 = __importDefault(require("../app/controllers/week-days/WeekDaysController"));
const weekDaysRoutes = (0, express_1.Router)();
weekDaysRoutes.get('/weekDays', WeekDaysController_1.default.index);
weekDaysRoutes.post('/weekDays', WeekDaysController_1.default.store);
weekDaysRoutes.delete('/weekDays/:id', WeekDaysController_1.default.delete);
weekDaysRoutes.get('/weekDays/:id', WeekDaysController_1.default.show);
weekDaysRoutes.put('/weekDays/:id', WeekDaysController_1.default.update);
exports.default = weekDaysRoutes;
