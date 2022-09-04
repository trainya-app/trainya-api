"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MembersSettingsController_1 = __importDefault(require("../app/controllers/members/MembersSettingsController"));
const memberSettingsRoutes = (0, express_1.Router)();
memberSettingsRoutes.get('/memberSettings', MembersSettingsController_1.default.index);
memberSettingsRoutes.post('/memberSettings', MembersSettingsController_1.default.store);
memberSettingsRoutes.delete('/memberSettings/:id', MembersSettingsController_1.default.delete);
memberSettingsRoutes.get('/memberSettings/:id', MembersSettingsController_1.default.show);
memberSettingsRoutes.put('/memberSettings/:id', MembersSettingsController_1.default.update);
exports.default = memberSettingsRoutes;
