"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSomeEmpty_1 = require("../../../utils/isSomeEmpty");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const EmployeesRepository_1 = __importDefault(require("../../repositories/employees/EmployeesRepository"));
const createToken_1 = require("../../../utils/createToken");
const secret_token_1 = require("../../contants/secret.token");
class EmployeeAuthController {
    async isAuthenticated(req, res) {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.sendStatus(401);
        }
        const token = authorization.split(' ')[1];
        try {
            const tokenDecoded = jsonwebtoken_1.default.verify(token, secret_token_1.SECRET);
            if (tokenDecoded) {
                return res.sendStatus(200);
            }
            return res.sendStatus(401);
        }
        catch (_a) {
            return res.sendStatus(401);
        }
    }
    async authenticate(req, res) {
        var _a;
        const { email, password } = req.body;
        const someFieldIsEmpty = (0, isSomeEmpty_1.isSomeEmpty)([email, password]);
        if (someFieldIsEmpty) {
            return res.status(400).json({
                message: 'Campos obrigatórios não foram inseridos',
                employee: null,
                token: null,
            });
        }
        const employee = await EmployeesRepository_1.default.findByEmail({ email });
        if (!employee) {
            return res
                .status(400)
                .json({ message: 'Email não existe', employee: null, token: null });
        }
        const isPasswordCorrect = await bcrypt_1.default.compare(password, employee.password);
        if (!isPasswordCorrect) {
            return res
                .status(400)
                .json({ message: 'Senha incorreta', employee: null, token: null });
        }
        const token = (0, createToken_1.createToken)({
            id: employee.id,
            accessLevel: (_a = employee.role) === null || _a === void 0 ? void 0 : _a.access_level,
        });
        return res.status(200).send({ message: 'Logado', token });
    }
}
exports.default = new EmployeeAuthController();
