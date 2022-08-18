"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { productCategory } = new client_1.PrismaClient();
class ProductCategoryRepository {
    async create({ name, image_url }) {
        const CreatedProductCategory = await productCategory.create({
            data: {
                name,
                image_url,
            },
        });
        return CreatedProductCategory;
    }
}
exports.default = new ProductCategoryRepository();
