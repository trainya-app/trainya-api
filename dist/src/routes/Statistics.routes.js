"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StatisticsController_1 = __importDefault(require("../app/controllers/statistics/StatisticsController"));
const statisticsRoutes = (0, express_1.Router)();
statisticsRoutes.get('/statistics', StatisticsController_1.default.index);
statisticsRoutes.post('/statistics', StatisticsController_1.default.store);
statisticsRoutes.delete('/statistics/:id', StatisticsController_1.default.delete);
statisticsRoutes.get('/statistics/:id', StatisticsController_1.default.show);
statisticsRoutes.put('/statistics/:id', StatisticsController_1.default.update);
exports.default = statisticsRoutes;
