"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MonthsController_1 = __importDefault(require("../app/controllers/months/MonthsController"));
const monthsRoutes = (0, express_1.Router)();
monthsRoutes.get('/months', MonthsController_1.default.index);
monthsRoutes.post('/months', MonthsController_1.default.store);
exports.default = monthsRoutes;
