"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MonthsRepository_1 = __importDefault(require("../../repositories/months/MonthsRepository"));
class MonthsController {
    async index(req, res) {
        const months = await MonthsRepository_1.default.findAll();
        return res.send({ months });
    }
    async store(req, res) {
        const { name } = req.body;
        const monthExists = await MonthsRepository_1.default.findByName(name);
        if (monthExists) {
            return res
                .status(400)
                .json({ message: 'Mês já cadastrado', monthExists });
        }
        const createdMonth = await MonthsRepository_1.default.create({ name });
        return res.status(200).json({ message: 'Mês criado', createdMonth });
    }
}
exports.default = new MonthsController();
