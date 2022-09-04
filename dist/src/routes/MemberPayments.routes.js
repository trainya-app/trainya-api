"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MembersPaymentsController_1 = __importDefault(require("../app/controllers/members/MembersPaymentsController"));
const memberPaymentsRoutes = (0, express_1.Router)();
memberPaymentsRoutes.get('/memberPayments', MembersPaymentsController_1.default.index);
memberPaymentsRoutes.post('/memberPayments', MembersPaymentsController_1.default.store);
memberPaymentsRoutes.delete('/memberPayments/:id', MembersPaymentsController_1.default.delete);
memberPaymentsRoutes.get('/memberPayments/:id', MembersPaymentsController_1.default.show);
// memberPaymentsRoutes.put('/memberPayments/:id', MembersPaymentsController.update);
exports.default = memberPaymentsRoutes;
