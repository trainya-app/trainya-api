"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MemberPhotoProgressController_1 = __importDefault(require("../app/controllers/members/MemberPhotoProgressController"));
const memberPhotoProgress = (0, express_1.Router)();
const MulterMiddleware_1 = __importDefault(require("../app/middlewares/MulterMiddleware"));
const firebase_1 = require("../services/firebase");
memberPhotoProgress.get('/memberPhotoProgress', MemberPhotoProgressController_1.default.index);
memberPhotoProgress.post('/memberPhotoProgress', MemberPhotoProgressController_1.default.store);
memberPhotoProgress.put('/member-uploadFirstPhoto', MulterMiddleware_1.default.single('photo'), firebase_1.uploadFiles, MemberPhotoProgressController_1.default.uploadFirstPhoto);
memberPhotoProgress.put('/member-uploadSecondPhoto', MulterMiddleware_1.default.single('photo'), firebase_1.uploadFiles, MemberPhotoProgressController_1.default.uploadSecondPhoto);
memberPhotoProgress.put('/member-uploadThirdPhoto', MulterMiddleware_1.default.single('photo'), firebase_1.uploadFiles, MemberPhotoProgressController_1.default.uploadThirdPhoto);
memberPhotoProgress.get('/member-photos-progress', MemberPhotoProgressController_1.default.showByMember);
memberPhotoProgress.get('/member-month-photos-progress', MemberPhotoProgressController_1.default.showByMemberAndMonth);
exports.default = memberPhotoProgress;
