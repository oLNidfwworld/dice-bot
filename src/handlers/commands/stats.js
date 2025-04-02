"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerStatsCommand = void 0;
const stats_1 = require("../../services/stats");
const reply_utils_1 = require("../../utils/reply-utils");
const registerStatsCommand = (commandGroup) => commandGroup.command('stats', 'Ваша статистика', async (ctx) => {
    var _a, _b, _c, _d;
    if ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.from.id) {
        const stats = await (0, stats_1.getStats)(ctx.message.from.id);
        const stat = {
            count: stats.length,
            avg: stats.reduce((acc, item) => acc + item.result, 0) / stats.length,
        };
        await ctx.reply(`Ваша статистика:\n\nВсего бросков: ${stat.count}\nСредний результат: ${(_b = stat.avg) !== null && _b !== void 0 ? _b : 'Нет результатов'}
          `, { ...(0, reply_utils_1.createReplyOptions)((_c = ctx.message) === null || _c === void 0 ? void 0 : _c.message_id) });
    }
    else {
        await ctx.reply('Увы вы инкогнида и статистика для вас не записывается', {
            ...(0, reply_utils_1.createReplyOptions)((_d = ctx.message) === null || _d === void 0 ? void 0 : _d.message_id),
        });
    }
});
exports.registerStatsCommand = registerStatsCommand;
//# sourceMappingURL=stats.js.map