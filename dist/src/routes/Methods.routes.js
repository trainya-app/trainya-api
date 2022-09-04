"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const methodsRoutes = (0, express_1.Router)();
const MethodsController_1 = __importDefault(require("../app/controllers/methods/MethodsController"));
methodsRoutes.get('/methods', MethodsController_1.default.index);
methodsRoutes.post('/methods', MethodsController_1.default.store);
methodsRoutes.delete('/methods/:id', MethodsController_1.default.delete);
methodsRoutes.get('/methods/:id', MethodsController_1.default.show);
methodsRoutes.put('/methods/:id', MethodsController_1.default.update);
exports.default = methodsRoutes;
