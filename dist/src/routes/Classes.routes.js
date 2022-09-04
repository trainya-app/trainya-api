"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassesController_1 = __importDefault(require("../app/controllers/classes/ClassesController"));
const classesRoutes = (0, express_1.Router)();
classesRoutes.get('/classes', ClassesController_1.default.index);
classesRoutes.post('/classes', ClassesController_1.default.create);
classesRoutes.delete('/classes/:id', ClassesController_1.default.delete);
classesRoutes.get('/classes/:id', ClassesController_1.default.show);
classesRoutes.put('/classes/:id', ClassesController_1.default.update);
exports.default = classesRoutes;
