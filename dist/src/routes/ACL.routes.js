"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ACLController_1 = __importDefault(require("../app/controllers/ACL/ACLController"));
const aclRoutes = (0, express_1.Router)();
aclRoutes.get('/acl', ACLController_1.default.index);
aclRoutes.post('/acl', ACLController_1.default.store);
exports.default = aclRoutes;
