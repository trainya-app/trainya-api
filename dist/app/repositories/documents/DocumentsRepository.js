"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocumentsRepository {
    index(req, res) {
        res.send('index');
    }
}
exports.default = new DocumentsRepository();
