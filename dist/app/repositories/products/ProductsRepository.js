"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductsRepository {
    index(req, res) {
        res.send('index');
    }
}
exports.default = new ProductsRepository();
