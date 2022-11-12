"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filesRoutes = (0, express_1.Router)();
const MulterMiddleware_1 = __importDefault(require("../app/middlewares/MulterMiddleware"));
const firebase_1 = require("../services/firebase");
const FilesController_1 = __importDefault(require("../app/controllers/FilesController"));
filesRoutes.post('/files', MulterMiddleware_1.default.single('file'), firebase_1.uploadFiles, FilesController_1.default.main);
exports.default = filesRoutes;
