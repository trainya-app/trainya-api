"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { memberPhotoProgress } = new client_1.PrismaClient();
class MemberPhotoProgressRepository {
    async findAll() {
        return await memberPhotoProgress.findMany();
    }
    async create({ member_id, month_id }) {
        return await memberPhotoProgress.create({
            data: {
                member_id,
                month_id
            }
        });
    }
    async createForAllMonths(member_id) {
        try {
            const createdProgresses = await memberPhotoProgress.createMany({
                data: [
                    { member_id, month_id: 1 },
                    { member_id, month_id: 2 },
                    { member_id, month_id: 3 },
                    { member_id, month_id: 4 },
                    { member_id, month_id: 5 },
                    { member_id, month_id: 6 },
                    { member_id, month_id: 7 },
                    { member_id, month_id: 8 },
                    { member_id, month_id: 9 },
                    { member_id, month_id: 10 },
                    { member_id, month_id: 11 },
                    { member_id, month_id: 12 },
                ],
            });
            return createdProgresses;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
    async findByMemberAndMonth({ member_id, month_id }) {
        return await memberPhotoProgress.findFirst({
            where: {
                month_id,
                member_id
            }
        });
    }
    async putFirstPhoto({ firstPhoto_url, id }) {
        return await memberPhotoProgress.update({
            where: {
                id,
            },
            data: {
                firstPhoto_url
            }
        });
    }
    async putSecondPhoto({ secondPhoto_url, id }) {
        return await memberPhotoProgress.update({
            where: {
                id,
            },
            data: {
                secondPhoto_url
            }
        });
    }
    async putThirdPhoto({ thirdPhoto_url, id }) {
        return await memberPhotoProgress.update({
            where: {
                id,
            },
            data: {
                thirdPhoto_url
            }
        });
    }
    async findByMember(member_id) {
        return await memberPhotoProgress.findMany({
            where: {
                member_id
            },
            select: {
                month: {
                    select: {
                        name: true,
                    }
                },
                firstPhoto_url: true,
                secondPhoto_url: true,
                thirdPhoto_url: true,
            }
        });
    }
}
exports.default = new MemberPhotoProgressRepository();
