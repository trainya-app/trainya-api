"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MembersController_1 = __importDefault(require("../app/controllers/members/MembersController"));
const membersRoutes = (0, express_1.Router)();
membersRoutes.get('/members', MembersController_1.default.index);
membersRoutes.get('/members/:id', MembersController_1.default.show);
membersRoutes.post('/members', MembersController_1.default.store);
membersRoutes.delete('/members/:id', MembersController_1.default.delete);
membersRoutes.put('/members/password/:id', MembersController_1.default.updatePassword);
membersRoutes.put('/members/:id', MembersController_1.default.update);
exports.default = membersRoutes;
