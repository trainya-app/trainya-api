"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SettingsOptionsController_1 = __importDefault(require("../app/controllers/settings-options/SettingsOptionsController"));
const settingOptionsRoutes = (0, express_1.Router)();
settingOptionsRoutes.get('/settingOptions', SettingsOptionsController_1.default.index);
settingOptionsRoutes.post('/settingOptions', SettingsOptionsController_1.default.store);
settingOptionsRoutes.delete('/settingOptions/:id', SettingsOptionsController_1.default.delete);
settingOptionsRoutes.get('/settingOptions/:id', SettingsOptionsController_1.default.show);
settingOptionsRoutes.put('/settingOptions/:id', SettingsOptionsController_1.default.update);
exports.default = settingOptionsRoutes;
