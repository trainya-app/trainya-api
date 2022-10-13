"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmployeesClassesController_1 = __importDefault(require("../app/controllers/employees/EmployeesClassesController"));
const employeesClassesRoutes = (0, express_1.Router)();
employeesClassesRoutes.get('/employeesClasses', EmployeesClassesController_1.default.index);
employeesClassesRoutes.post('/employeesClasses', EmployeesClassesController_1.default.store);
exports.default = employeesClassesRoutes;
