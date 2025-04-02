"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
exports.setStats = setStats;
const prisma_connect_1 = require("../prisma-connect");
async function setStats(stats) {
    const user = await prisma_connect_1.prisma.user.findUnique({
        where: {
            id: stats.uid,
        },
    });
    if (!user) {
        await prisma_connect_1.prisma.user.create({
            data: {
                id: stats.uid,
            },
        });
    }
    const record = await prisma_connect_1.prisma.action.create({
        data: {
            result: stats.stat,
            userId: stats.uid,
        },
        include: {
            user: true,
        },
    });
    return record;
}
const getStats = async (uid) => await prisma_connect_1.prisma.action.findMany({
    where: {
        userId: uid,
    },
    select: {
        result: true,
    },
});
exports.getStats = getStats;
//# sourceMappingURL=stats.js.map