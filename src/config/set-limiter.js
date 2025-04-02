"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ratelimiter_1 = require("@grammyjs/ratelimiter");
const reply_utils_1 = require("../utils/reply-utils");
exports.default = (bot) => bot.use((0, ratelimiter_1.limit)({
    timeFrame: 3500,
    limit: 2,
    onLimitExceeded: async (ctx) => {
        var _a;
        await ctx.reply('Хватит спамить уебище!', {
            ...(0, reply_utils_1.createReplyOptions)((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.message_id),
        });
    },
    keyGenerator: (ctx) => {
        var _a;
        return (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id.toString();
    },
}));
//# sourceMappingURL=set-limiter.js.map