"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MemberMonthsDayProgressController_1 = __importDefault(require("../app/controllers/members/MemberMonthsDayProgressController"));
const memberMonthsDayProgressRoutes = (0, express_1.Router)();
memberMonthsDayProgressRoutes.get('/memberMonthsDayProgressRoutes', MemberMonthsDayProgressController_1.default.index);
memberMonthsDayProgressRoutes.post('/memberMonthsDayProgressRoutes', MemberMonthsDayProgressController_1.default.store);
memberMonthsDayProgressRoutes.delete('/memberMonthsDayProgressRoutes/:id', MemberMonthsDayProgressController_1.default.deleteAllByMember);
memberMonthsDayProgressRoutes.get('/memberMonthsDayProgressRoutes-member', MemberMonthsDayProgressController_1.default.showByMember);
exports.default = memberMonthsDayProgressRoutes;
