"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_token_1 = require("../contants/secret.token");
function AuthMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: 'O token de autenticação não foi encontrado',
            error: true,
        });
    }
    const [, token] = authorization.split(' ');
    try {
        const data = jsonwebtoken_1.default.verify(token, secret_token_1.SECRET);
        const { id } = data;
        req.userId = Number(id);
        return next();
    }
    catch (err) {
        console.log({ err });
        return res.status(401).json({
            message: 'O token está inválido',
            error: true,
        });
    }
}
exports.default = AuthMiddleware;
