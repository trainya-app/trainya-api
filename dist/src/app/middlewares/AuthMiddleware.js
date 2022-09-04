"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
        const data = jsonwebtoken_1.default.verify(token, process.env.SECRET || 'secret');
        const { id } = data;
        req.userId = id;
        return next();
    }
    catch (_a) {
        return res.status(401).json({
            message: 'O token está inválido',
            error: true,
        });
    }
}
exports.default = AuthMiddleware;
