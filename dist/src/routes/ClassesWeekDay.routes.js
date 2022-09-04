"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassesWeekDaysController_1 = __importDefault(require("../app/controllers/classes/ClassesWeekDaysController"));
const classesWeekDaysRoutes = (0, express_1.Router)();
classesWeekDaysRoutes.get('/classWeekDays', ClassesWeekDaysController_1.default.index);
classesWeekDaysRoutes.post('/classWeekDays', ClassesWeekDaysController_1.default.store);
classesWeekDaysRoutes.delete('/classWeekDays/:id', ClassesWeekDaysController_1.default.delete);
classesWeekDaysRoutes.get('/classWeekDays/:id', ClassesWeekDaysController_1.default.show);
classesWeekDaysRoutes.put('/classWeekDays/:id', ClassesWeekDaysController_1.default.update);
exports.default = classesWeekDaysRoutes;
