"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductsCategoriesController_1 = __importDefault(require("../app/controllers/products-categories/ProductsCategoriesController"));
const productsCategoriesRoutes = (0, express_1.Router)();
const MulterMiddleware_1 = __importDefault(require("../app/middlewares/MulterMiddleware"));
productsCategoriesRoutes.post('/products-categories', MulterMiddleware_1.default.single('image'), ProductsCategoriesController_1.default.create);
exports.default = productsCategoriesRoutes;
