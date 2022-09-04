"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const StatisticsRepository_1 = __importDefault(require("../../repositories/statistics/StatisticsRepository"));
class StatisticsController {
    async index(req, res) {
        const statistics = await StatisticsRepository_1.default.findAll();
        return res.send({ statistics });
    }
    async store(req, res) {
        const { description } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([description]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                statistic: null,
            });
        }
        const descriptionExist = await StatisticsRepository_1.default.findByDescription(description);
        if (descriptionExist) {
            return res
                .status(400)
                .json({ message: 'Descrição já existe', statistic: null });
        }
        const statistic = await StatisticsRepository_1.default.create({
            description,
        });
        return res.status(200).json({ message: 'Estátistica criada', statistic });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const statisticExists = await StatisticsRepository_1.default.findById(parsedId);
        if (!statisticExists) {
            return res
                .status(400)
                .json({ message: 'Estátistica não encontrada', statistic: null });
        }
        await StatisticsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const statisticExists = await StatisticsRepository_1.default.findById(parsedId);
        if (!statisticExists) {
            return res
                .status(400)
                .json({ message: 'Estátistica não encontrada', statistic: null });
        }
        return res
            .status(200)
            .json({ message: 'Estátistica encontrada', statistic: statisticExists });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { description } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([description]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram enviados',
                statistic: null,
            });
        }
        const descriptionExist = await StatisticsRepository_1.default.findByDescription(description);
        if (descriptionExist) {
            let id = descriptionExist.id;
            if (id != parsedId) {
                return res
                    .status(400)
                    .json({ message: 'Descrição já existe', statistic: null });
            }
        }
        const updatedStatistic = await StatisticsRepository_1.default.update({
            id: parsedId,
            description,
        });
        return res
            .status(200)
            .json({ message: 'Estátistica atualizada', statistic: updatedStatistic });
    }
}
exports.default = new StatisticsController();
