"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DocumentsController_1 = __importDefault(require("../app/controllers/documents/DocumentsController"));
const documentsRoutes = (0, express_1.Router)();
documentsRoutes.get('/documents', DocumentsController_1.default.index);
documentsRoutes.post('/documents', DocumentsController_1.default.store);
documentsRoutes.delete('/documents/:id', DocumentsController_1.default.delete);
documentsRoutes.post('/documents/:id', DocumentsController_1.default.show);
documentsRoutes.put('/documents/:id', DocumentsController_1.default.update);
exports.default = documentsRoutes;
