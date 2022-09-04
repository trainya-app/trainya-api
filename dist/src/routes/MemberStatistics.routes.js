"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MembersStatisticsController_1 = __importDefault(require("../app/controllers/members/MembersStatisticsController"));
const memberStatisticsRoutes = (0, express_1.Router)();
memberStatisticsRoutes.get('/memberStatistics', MembersStatisticsController_1.default.index);
memberStatisticsRoutes.post('/memberStatistics', MembersStatisticsController_1.default.store);
memberStatisticsRoutes.delete('/memberStatistics/:id', MembersStatisticsController_1.default.delete);
memberStatisticsRoutes.get('/memberStatistics/:id', MembersStatisticsController_1.default.show);
memberStatisticsRoutes.put('/memberStatistics/:id', MembersStatisticsController_1.default.update);
exports.default = memberStatisticsRoutes;
