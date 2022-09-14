"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const MembersRepository_1 = __importDefault(require("../../repositories/members/MembersRepository"));
class MemberAuthController {
    async authenticate(req, res) {
        const { email, password } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([email, password]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram inseridos',
                member: null,
            });
        }
        const memberExists = await MembersRepository_1.default.findByEmail({ email });
        if (!memberExists) {
            return res
                .status(400)
                .json({ message: 'Email não existe', member: null });
        }
        const checkPassword = await bcrypt_1.default.compare(password, memberExists.password);
        if (!checkPassword) {
            return res.status(400).json({ message: 'Senha incorreta', member: null });
        }
        const secret = process.env.SECRET || 'secret';
        const token = jsonwebtoken_1.default.sign({
            id: memberExists.id,
        }, secret, {
            expiresIn: process.env.EXPIRES_IN || '30d',
        });
        return res
            .status(200)
            .send({ message: 'Logado', token });
    }
}
exports.default = new MemberAuthController();
