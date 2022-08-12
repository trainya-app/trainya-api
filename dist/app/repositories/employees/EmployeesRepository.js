"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeesRepository {
    index(req, res) {
        res.send('index');
    }
}
exports.default = new EmployeesRepository();
