"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const GymsRepository_1 = __importDefault(require("../../repositories/gyms/GymsRepository"));
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
class GymsController {
    async index(req, res) {
        const gyms = await GymsRepository_1.default.findAll();
        return res.send({ gyms });
    }
    async store(req, res) {
        const { name, email, password, state, city, street, adressNumber, zipCode, } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([
            name,
            email,
            password,
            state,
            city,
            street,
            adressNumber,
            zipCode,
        ]);
        if (someFieldIsEmpty) {
            res.status(400).json({
                message: 'Campos obrigatórios não foram enviados.',
                gym: null,
            });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 8);
        const emailExists = await GymsRepository_1.default.findByEmail({ email });
        if (emailExists) {
            return res
                .status(400)
                .json({ message: 'Email já cadastrado', gym: null });
        }
        const gym = await GymsRepository_1.default.create({
            name,
            email,
            password: hashedPassword,
            state,
            city,
            street,
            adress_number: Number(adressNumber),
            zip_code: Number(zipCode),
        });
        if (gym === null) {
            return res
                .status(400)
                .json({ message: 'Valores inválidos para criação da academia.' });
        }
        return res.json({ message: 'Academia Criada ', gym });
    }
    async updatePassword(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const { firstNewPassword, secondNewPassword } = req.body;
        if (firstNewPassword !== secondNewPassword) {
            return res
                .status(400)
                .json({ message: 'As senhas não são iguais', newPassword: null });
        }
        const gymExists = await GymsRepository_1.default.findById(parsedId);
        if (!gymExists) {
            return res.status(404).json({ message: 'Academia não encontrada' });
        }
        const { password } = await GymsRepository_1.default.findPasswordById(parsedId);
        const samePassword = await bcrypt_1.default.compare(firstNewPassword, password);
        if (samePassword) {
            return res.status(400).json({
                message: 'A senha nova não pode ser igual a antiga',
                newPassword: null,
            });
        }
        const hashedNewPassword = await bcrypt_1.default.hash(firstNewPassword, 8);
        const newPassword = await GymsRepository_1.default.updatePassword(hashedNewPassword, parsedId);
        return res.json({ message: 'Atualizada', newPassword });
    }
    async delete(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        const gymExists = await GymsRepository_1.default.findById(parsedId);
        if (!gymExists) {
            return res.status(404).json({ message: 'Academia não encontrada' });
        }
        await GymsRepository_1.default.delete(parsedId);
        return res.sendStatus(200);
    }
    async show(req, res) {
        const { id } = req.params;
        const parsedId = Number(id);
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID inválido', gym: null });
        }
        const gym = await GymsRepository_1.default.findById(parsedId);
        if (!gym) {
            return res
                .status(404)
                .send({ message: 'Academia não encontrada', gym: null });
        }
        return res.status(200).json({ message: 'Academia encontrada', gym });
    }
    async update(req, res) {
        const { id } = req.params;
        const { name, email, state, city, street, adressNumber, zipCode } = req.body;
        const parsedId = Number(id);
        const gymExists = await GymsRepository_1.default.findById(parsedId);
        if (!gymExists) {
            return res
                .status(404)
                .json({ message: 'Academia não encontrada', gym: null });
        }
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID Inválido', gym: null });
        }
        const emailExists = await GymsRepository_1.default.findByEmail(email);
        if (emailExists) {
            const idByEmail = await GymsRepository_1.default.findIdByEmail(email);
            let id = idByEmail.id;
            if (id != parsedId) {
                return res
                    .status(400)
                    .json({ message: 'Email já está em uso', gym: null });
            }
        }
        const adress_number = Number.isNaN(Number(adressNumber))
            ? undefined
            : Number(adressNumber);
        const zip_code = Number.isNaN(Number(zipCode))
            ? undefined
            : Number(zipCode);
        const updatedGym = await GymsRepository_1.default.updateGym({
            id: parsedId,
            name,
            email,
            state,
            city,
            street,
            adress_number,
            zip_code,
        });
        return res.json({ message: 'Dados atualizados!', updatedGym });
    }
}
exports.default = new GymsController();
