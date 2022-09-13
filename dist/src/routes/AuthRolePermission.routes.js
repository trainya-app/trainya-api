"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthRolePermissionsController_1 = __importDefault(require("../app/controllers/authRolePermissions/AuthRolePermissionsController"));
const authRolePermissionsRoutes = (0, express_1.Router)();
authRolePermissionsRoutes.get('/authRolePermissions', AuthRolePermissionsController_1.default.index);
authRolePermissionsRoutes.post('/authRolePermissions', AuthRolePermissionsController_1.default.store);
exports.default = authRolePermissionsRoutes;
