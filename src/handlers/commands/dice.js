"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerDiceCommand = void 0;
const emojis_1 = __importDefault(require("../../assets/data/emojis"));
const reply_utils_1 = require("../../utils/reply-utils");
const roll_dice_1 = __importDefault(require("../../services/roll-dice"));
const registerDiceCommand = (commandGroup) => commandGroup.command('dice', 'Крутите кубэк d20', async (ctx) => {
    var _a, _b;
    const i = await (0, roll_dice_1.default)(ctx);
    console.log((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.from.id);
    try {
        await ctx.replyWithSticker(emojis_1.default[i - 1], {
            ...(0, reply_utils_1.createReplyOptions)((_b = ctx.message) === null || _b === void 0 ? void 0 : _b.message_id),
        });
    }
    catch (e) {
        console.log('Возможно ' + i + 'd стикер проебан!');
        console.error(e);
    }
});
exports.registerDiceCommand = registerDiceCommand;
//# sourceMappingURL=dice.js.map