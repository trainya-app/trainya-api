"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProvidersRepository {
    index(req, res) {
        res.send('index');
    }
}
exports.default = new ProvidersRepository();
