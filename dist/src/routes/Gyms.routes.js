"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GymsController_1 = __importDefault(require("../app/controllers/gyms/GymsController"));
const gymsRoutes = (0, express_1.Router)();
gymsRoutes.get('/gyms', GymsController_1.default.index);
gymsRoutes.post('/gyms', GymsController_1.default.store);
gymsRoutes.delete('/gyms/:id', GymsController_1.default.delete);
gymsRoutes.get('/gyms/:id', GymsController_1.default.show);
gymsRoutes.put('/gyms/password/:id', GymsController_1.default.updatePassword);
gymsRoutes.put('/gyms/:id', GymsController_1.default.update);
gymsRoutes.put('/gyms/capacity/:gymId/:memberId/:monthId', GymsController_1.default.updateCapacity);
gymsRoutes.get('/gyms-member', GymsController_1.default.showByMember);
gymsRoutes.get('/gyms-classes/:gymId', GymsController_1.default.showByClass);
exports.default = gymsRoutes;
