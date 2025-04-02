"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommands = registerCommands;
const commands_1 = require("@grammyjs/commands");
const dice_1 = require("./dice");
const commands_2 = require("./commands");
const stats_1 = require("./stats");
async function registerCommands(bot) {
    const commandGroup = new commands_1.CommandGroup();
    // Регистрация команд
    (0, dice_1.registerDiceCommand)(commandGroup);
    (0, commands_2.registerCommandsCommand)(commandGroup);
    (0, stats_1.registerStatsCommand)(commandGroup);
    // Применение команд к боту
    bot.use(commandGroup);
    // Установка команд в меню бота
    try {
        await commandGroup.setCommands(bot);
    }
    catch (e) {
        console.error('Failed to bind commands');
        console.log(e);
    }
}
//# sourceMappingURL=index.js.map