"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MembersController_1 = __importDefault(require("../app/controllers/members/MembersController"));
const membersRoutes = (0, express_1.Router)();
const MulterMiddleware_1 = __importDefault(require("../app/middlewares/MulterMiddleware"));
const firebase_1 = require("../services/firebase");
membersRoutes.get('/members', MembersController_1.default.index);
membersRoutes.get('/members/:id', MembersController_1.default.show);
membersRoutes.post('/members', MembersController_1.default.store);
membersRoutes.delete('/members/:id', MembersController_1.default.delete);
membersRoutes.put('/members/password/:id', MembersController_1.default.updatePassword);
membersRoutes.put('/members/:id', MembersController_1.default.update);
membersRoutes.put('/members-avatar', MulterMiddleware_1.default.single('avatar'), firebase_1.uploadAvatar, MembersController_1.default.uploadAvatar);
membersRoutes.get('/member-workouts', MembersController_1.default.showWorkouts);
exports.default = membersRoutes;
