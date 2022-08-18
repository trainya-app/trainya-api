"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GymsEmployeesController_1 = __importDefault(require("../app/controllers/gyms/GymsEmployeesController"));
const gymEmployeesRoutes = (0, express_1.Router)();
gymEmployeesRoutes.get('/gymEmployees', GymsEmployeesController_1.default.index);
gymEmployeesRoutes.get('/gymEmployees/:id', GymsEmployeesController_1.default.show);
gymEmployeesRoutes.post('/gymEmployees', GymsEmployeesController_1.default.store);
gymEmployeesRoutes.delete('/gymEmployees/:id', GymsEmployeesController_1.default.delete);
gymEmployeesRoutes.put('/gymEmployees/:id', GymsEmployeesController_1.default.update);
exports.default = gymEmployeesRoutes;
