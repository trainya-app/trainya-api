"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GymsMembersController_1 = __importDefault(require("../app/controllers/gyms/GymsMembersController"));
const gymMembersRoutes = (0, express_1.Router)();
gymMembersRoutes.get('/gymMembers/:gymId', GymsMembersController_1.default.index);
gymMembersRoutes.post('/gymMembers', GymsMembersController_1.default.store);
gymMembersRoutes.get('/gymMembers/:id', GymsMembersController_1.default.show);
gymMembersRoutes.delete('/gymMembers/:id', GymsMembersController_1.default.delete);
gymMembersRoutes.put('/gymMembers/:id', GymsMembersController_1.default.update);
exports.default = gymMembersRoutes;
