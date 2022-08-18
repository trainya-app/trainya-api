"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { gym } = new client_1.PrismaClient();
class GymsRepository {
    async findAll() {
        const allGyms = await gym.findMany();
        return allGyms;
    }
    async create({ name, email, password, state, city, street, adress_number, zip_code, }) {
        try {
            const createdGym = await gym.create({
                data: {
                    name,
                    email,
                    password,
                    state,
                    city,
                    street,
                    zip_code,
                    adress_number,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    password: true,
                    state: true,
                    city: true,
                    street: true,
                    zip_code: true,
                    adress_number: true,
                },
            });
            return createdGym;
        }
        catch (_a) {
            return null;
        }
    }
    async findByEmail({ email }) {
        const emailExists = await gym.findFirst({
            where: {
                email,
            },
        });
        return emailExists;
    }
    async findPasswordById(id) {
        const password = await gym.findFirst({
            select: {
                password: true,
            },
            where: {
                id,
            },
        });
        return password;
    }
    async findByName({ name }) {
        const nameExists = await gym.findFirst({
            where: {
                name,
            },
        });
        return nameExists;
    }
    async findById(id) {
        const gymExists = await gym.findFirst({
            where: {
                id,
            },
        });
        return gymExists;
    }
    async delete(id) {
        await gym.delete({
            where: {
                id,
            },
        });
        return true;
    }
    async updatePassword(password, id) {
        const newPassword = await gym.update({
            data: {
                password,
            },
            where: {
                id,
            },
        });
        return newPassword;
    }
    async updateGym({ id, name, email, state, city, street, adress_number, zip_code, }) {
        const updatedGym = await gym.update({
            where: {
                id,
            },
            data: {
                name,
                email,
                state,
                city,
                street,
                adress_number,
                zip_code,
            },
        });
        return updatedGym;
    }
    async findIdByEmail(email) {
        const id = await gym.findFirst({
            where: {
                email,
            },
        });
        return id;
    }
}
exports.default = new GymsRepository();
