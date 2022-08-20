"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MembersGoalsController_1 = __importDefault(require("../app/controllers/members/MembersGoalsController"));
const memberGoalsRoutes = (0, express_1.Router)();
memberGoalsRoutes.get('/memberGoals', MembersGoalsController_1.default.index);
memberGoalsRoutes.post('/memberGoals', MembersGoalsController_1.default.store);
memberGoalsRoutes.delete('/memberGoals/:id', MembersGoalsController_1.default.delete);
memberGoalsRoutes.get('/memberGoals/:id', MembersGoalsController_1.default.show);
memberGoalsRoutes.put('/memberGoals/:id', MembersGoalsController_1.default.update);
exports.default = memberGoalsRoutes;
