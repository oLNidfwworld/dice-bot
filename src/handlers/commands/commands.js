"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommandsCommand = void 0;
const reply_utils_1 = require("../../utils/reply-utils");
const registerCommandsCommand = (commandGroup) => commandGroup.command('commands', 'Команды бота', async (ctx) => {
    var _a;
    try {
        await ctx.reply(` 
            Команды бота:\nпока только...\n\n/dice - Крутите кубэк d20\n/commands - Команды бота\n/stats - Ваша статистика
          `, { ...(0, reply_utils_1.createReplyOptions)((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.message_id) });
    }
    catch (e) {
        console.error(e);
    }
});
exports.registerCommandsCommand = registerCommandsCommand;
//# sourceMappingURL=commands.js.map