"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MembersRepository {
    index(req, res) {
        res.send('index');
    }
}
exports.default = new MembersRepository();
