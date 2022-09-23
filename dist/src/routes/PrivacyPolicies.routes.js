"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PrivacyPoliciesController_1 = __importDefault(require("../app/controllers/privacyPolicies/PrivacyPoliciesController"));
const privacyPoliciesRoutes = (0, express_1.Router)();
privacyPoliciesRoutes.get('/privacy', PrivacyPoliciesController_1.default.index);
privacyPoliciesRoutes.post('/privacy', PrivacyPoliciesController_1.default.store);
privacyPoliciesRoutes.put('/privacy', PrivacyPoliciesController_1.default.update);
exports.default = privacyPoliciesRoutes;
