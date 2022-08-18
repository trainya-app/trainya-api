"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RollsController_1 = __importDefault(require("../app/controllers/rolls/RollsController"));
const rollsRoutes = (0, express_1.Router)();
rollsRoutes.get('/rolls', RollsController_1.default.index);
rollsRoutes.post('/rolls', RollsController_1.default.store);
rollsRoutes.delete('/rolls/:id', RollsController_1.default.delete);
rollsRoutes.get('/rolls/:id', RollsController_1.default.show);
rollsRoutes.put('/rolls/:id', RollsController_1.default.update);
exports.default = rollsRoutes;
