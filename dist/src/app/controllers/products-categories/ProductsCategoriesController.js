"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsCategoriesRepository_1 = __importDefault(require("../../repositories/products-categories/ProductsCategoriesRepository"));
class ProductsCategoriesController {
    async create(req, res) {
        const { name, image_url } = req.body;
        const productCategory = await ProductsCategoriesRepository_1.default.create({
            name,
            image_url,
        });
        return res.send({ created: productCategory });
    }
}
exports.default = new ProductsCategoriesController();
