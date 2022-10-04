"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_token_1 = require("../app/contants/secret.token");
const createToken = (data) => {
    const token = jsonwebtoken_1.default.sign(data, secret_token_1.SECRET, {
        expiresIn: process.env.EXPIRES_IN || '30d',
    });
    return token;
};
exports.createToken = createToken;
