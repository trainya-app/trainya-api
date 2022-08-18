"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GoalsRepository {
    index(req, res) {
        res.send('index');
    }
}
exports.default = new GoalsRepository();
