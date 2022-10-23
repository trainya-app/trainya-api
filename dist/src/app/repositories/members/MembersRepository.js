"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { member } = new client_1.PrismaClient();
class MembersRepository {
    async findAll() {
        const members = await member.findMany();
        return members;
    }
    async findByEmail({ email }) {
        const emailExists = await member.findFirst({
            where: {
                email,
            },
        });
        return emailExists;
    }
    async findById(id) {
        const memberExists = await member.findFirst({
            where: {
                id,
            },
        });
        return memberExists;
    }
    async create({ phone, name, weight, height, email, password, state, city, street, adress_number, birth_date, avatar_url, }) {
        try {
            const createdMember = await member.create({
                data: {
                    phone,
                    name,
                    weight,
                    height,
                    email,
                    password,
                    state,
                    city,
                    street,
                    adress_number,
                    birth_date,
                    avatar_url,
                },
            });
            return createdMember;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async delete(id) {
        await member.deleteMany({
            where: {
                id,
            },
        });
        return true;
    }
    async findPasswordById(id) {
        const password = await member.findFirst({
            select: {
                password: true,
            },
            where: {
                id,
            },
        });
        return password;
    }
    async updatePassword(id, password) {
        const updatedPassword = await member.update({
            where: {
                id,
            },
            data: {
                password,
            },
        });
        return updatedPassword;
    }
    async updateMember({ id, phone, name, weight, height, email, password, state, city, street, adress_number, birth_date, }) {
        const updatedMember = await member.update({
            where: {
                id,
            },
            data: {
                phone,
                name,
                weight,
                height,
                email,
                password,
                state,
                city,
                street,
                adress_number,
                birth_date,
            },
        });
        return updatedMember;
    }
    async findIdByEmail(email) {
        const id = await member.findFirst({
            where: {
                email,
            },
            select: {
                id: true,
            },
        });
        return id;
    }
    async updateAtGym({ inGym, id }) {
        const updatedMember = await member.update({
            where: {
                id,
            },
            data: {
                at_gym: inGym,
            },
            select: {
                at_gym: true,
            },
        });
        return updatedMember;
    }
    async updateAvatar({ id, avatar_url }) {
        const updatedMember = await member.update({
            where: {
                id,
            },
            data: {
                avatar_url,
            },
        });
        return updatedMember;
    }
}
exports.default = new MembersRepository();
