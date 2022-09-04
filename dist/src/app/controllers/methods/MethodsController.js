"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MethodsRepository_1 = __importDefault(require("../../repositories/methods/MethodsRepository"));
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
class MethodsController {
    async index(req, res) {
        const methods = await MethodsRepository_1.default.findAll();
        return res.send({ methods });
    }
    async store(req, res) {
        const { name } = req.body;
        if ((0, isSomeEmpty_1.isSomeEmpty)([name])) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram enviados',
                method: null,
            });
        }
        const nameExists = await MethodsRepository_1.default.findByName({ name });
        if (nameExists) {
            return res.status(400).send({
                message: 'Nome já está em uso',
                method: null,
            });
        }
        const method = await MethodsRepository_1.default.create(req.body);
        return res.send({ method });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const method = await MethodsRepository_1.default.findById(parsedId);
        if (!method) {
            return res.status(400).send({
                message: 'Método não encontrado',
                method: null,
            });
        }
        await MethodsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const methodExists = await MethodsRepository_1.default.findById(parsedId);
        if (!methodExists) {
            return res.status(400).send({
                message: 'Método não encontrado',
                method: null,
            });
        }
        return res.send({ method: methodExists });
    }
    async update(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { name } = req.body;
        if ((0, isSomeEmpty_1.isSomeEmpty)([name])) {
            return res.status(400).send({
                message: 'Campos obrigatórios não foram preenchidos',
                method: null,
            });
        }
        const methodExists = await MethodsRepository_1.default.findById(parsedId);
        if (!methodExists) {
            return res.status(400).send({
                message: 'Método não encontrado',
                method: null,
            });
        }
        const nameExists = await MethodsRepository_1.default.findByName({ name });
        if (nameExists) {
            let id = nameExists.id;
            if (id !== parsedId) {
                return res.status(400).send({
                    message: 'Nome já está em uso',
                    method: null,
                });
            }
        }
        const updatedMethod = await MethodsRepository_1.default.update({
            id: parsedId,
            name,
        });
        return res.status(200).send({ method: updatedMethod });
    }
}
exports.default = new MethodsController();
