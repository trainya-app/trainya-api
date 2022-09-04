"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RollsController_1 = __importDefault(require("../app/controllers/roles/RollsController"));
const rolesRoutes = (0, express_1.Router)();
rolesRoutes.get('/roles', RollsController_1.default.index);
rolesRoutes.post('/roles', RollsController_1.default.store);
rolesRoutes.delete('/roles/:id', RollsController_1.default.delete);
rolesRoutes.get('/roles/:id', RollsController_1.default.show);
rolesRoutes.put('/roles/:id', RollsController_1.default.update);
exports.default = rolesRoutes;
