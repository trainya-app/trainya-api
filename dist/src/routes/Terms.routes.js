"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TermsControllers_1 = __importDefault(require("../app/controllers/terms/TermsControllers"));
const termsRoutes = (0, express_1.Router)();
termsRoutes.get('/terms', TermsControllers_1.default.index);
termsRoutes.post('/terms', TermsControllers_1.default.store);
termsRoutes.put('/terms', TermsControllers_1.default.update);
exports.default = termsRoutes;
