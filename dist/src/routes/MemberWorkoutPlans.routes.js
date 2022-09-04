"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MembersWorkoutsPlansController_1 = __importDefault(require("../app/controllers/members/MembersWorkoutsPlansController"));
const membersWorkoutsPlansRoutes = (0, express_1.Router)();
membersWorkoutsPlansRoutes.get('/memberWorkoutPlans', MembersWorkoutsPlansController_1.default.index);
membersWorkoutsPlansRoutes.post('/memberWorkoutPlans', MembersWorkoutsPlansController_1.default.store);
membersWorkoutsPlansRoutes.delete('/memberWorkoutPlans/:id', MembersWorkoutsPlansController_1.default.delete);
membersWorkoutsPlansRoutes.get('/memberWorkoutPlans/:id', MembersWorkoutsPlansController_1.default.show);
membersWorkoutsPlansRoutes.put('/memberWorkoutPlans/:id', MembersWorkoutsPlansController_1.default.update);
exports.default = membersWorkoutsPlansRoutes;
