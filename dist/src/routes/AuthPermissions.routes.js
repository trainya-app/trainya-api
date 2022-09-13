"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthPermissionController_1 = __importDefault(require("../app/controllers/authPermissions/AuthPermissionController"));
const authPermissionsRoutes = (0, express_1.Router)();
authPermissionsRoutes.get('/authPermissions', AuthPermissionController_1.default.index);
authPermissionsRoutes.post('/authPermissions', AuthPermissionController_1.default.store);
exports.default = authPermissionsRoutes;
