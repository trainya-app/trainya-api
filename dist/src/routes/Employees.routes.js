"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmployeesController_1 = __importDefault(require("../app/controllers/employees/EmployeesController"));
const employeesRoutes = (0, express_1.Router)();
employeesRoutes.get('/employees', EmployeesController_1.default.index);
employeesRoutes.get('/employees/:id', EmployeesController_1.default.show);
employeesRoutes.post('/employees', EmployeesController_1.default.store);
employeesRoutes.delete('/employees/:id', EmployeesController_1.default.delete);
employeesRoutes.put('/employees/password/:id', EmployeesController_1.default.updatePassword);
employeesRoutes.put('/employees/:id', EmployeesController_1.default.update);
exports.default = employeesRoutes;
