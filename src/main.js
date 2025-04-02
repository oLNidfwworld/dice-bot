"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const grammy_1 = require("grammy");
const commands_1 = require("./handlers/commands");
const check_env_1 = require("./config/check-env");
const set_limiter_1 = __importDefault(require("./config/set-limiter"));
async function default_1() {
    const apiToken = (0, check_env_1.checkEnvConfig)();
    const bot = new grammy_1.Bot(apiToken);
    (0, set_limiter_1.default)(bot);
    (0, commands_1.registerCommands)(bot);
    bot.start();
    console.log('bot started. Press Ctrl+c to stop.');
}
//# sourceMappingURL=main.js.map