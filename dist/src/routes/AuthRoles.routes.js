"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthRoleController_1 = __importDefault(require("../app/controllers/authRole/AuthRoleController"));
const authRolesRoutes = (0, express_1.Router)();
authRolesRoutes.get('/authRoles', AuthRoleController_1.default.index);
authRolesRoutes.post('/authRoles', AuthRoleController_1.default.store);
exports.default = authRolesRoutes;
