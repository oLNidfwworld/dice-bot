import { Bot } from 'grammy';
import { CommandGroup } from '@grammyjs/commands';
import { registerDiceCommand } from './dice';
import { registerCommandsCommand } from './commands';

export async function registerCommands(bot: Bot) {
   const commandGroup = new CommandGroup();

   // Регистрация команд
   registerDiceCommand(commandGroup);
   registerCommandsCommand(commandGroup);

   // Применение команд к боту
   bot.use(commandGroup);

   // Установка команд в меню бота
   try {
      await commandGroup.setCommands(bot);
   } catch (e) {
      console.error('Failed to bind commands');
      console.log(e);
   }
}
