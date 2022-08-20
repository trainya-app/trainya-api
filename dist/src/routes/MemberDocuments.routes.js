"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MembersDocumentsController_1 = __importDefault(require("../app/controllers/members/MembersDocumentsController"));
const memberDocumentsRoutes = (0, express_1.Router)();
memberDocumentsRoutes.get('/memberDocuments', MembersDocumentsController_1.default.index);
memberDocumentsRoutes.post('/memberDocuments', MembersDocumentsController_1.default.store);
memberDocumentsRoutes.get('/memberDocuments/:id', MembersDocumentsController_1.default.show);
memberDocumentsRoutes.put('/memberDocuments/:id', MembersDocumentsController_1.default.update);
memberDocumentsRoutes.delete('/memberDocuments/:id', MembersDocumentsController_1.default.delete);
exports.default = memberDocumentsRoutes;
