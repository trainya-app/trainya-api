"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MembersClassesController_1 = __importDefault(require("../app/controllers/members/MembersClassesController"));
const membersClassesRoutes = (0, express_1.Router)();
membersClassesRoutes.get('/memberClasses', MembersClassesController_1.default.index);
membersClassesRoutes.post('/memberClasses', MembersClassesController_1.default.store);
membersClassesRoutes.delete('/memberClasses/:id', MembersClassesController_1.default.delete);
membersClassesRoutes.get('/memberClasses/:id', MembersClassesController_1.default.show);
membersClassesRoutes.put('/memberClasses/:id', MembersClassesController_1.default.update);
exports.default = membersClassesRoutes;
