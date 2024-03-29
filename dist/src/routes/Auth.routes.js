"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MemberAuthController_1 = __importDefault(require("../app/controllers/auth/MemberAuthController"));
const EmployeeAuthController_1 = __importDefault(require("../app/controllers/auth/EmployeeAuthController"));
const authRoutes = (0, express_1.Router)();
authRoutes.post('/auth/members', MemberAuthController_1.default.authenticate);
authRoutes.get('/auth/employees/', EmployeeAuthController_1.default.isAuthenticated);
authRoutes.post('/auth/employees', EmployeeAuthController_1.default.authenticate);
exports.default = authRoutes;
