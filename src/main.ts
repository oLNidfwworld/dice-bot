import { Bot } from 'grammy';
import { registerCommands } from './handlers/commands';
import { checkEnvConfig } from './config/check-env';
import setLimiter from './config/set-limiter';

export default async function () {
   const apiToken = checkEnvConfig();

   const bot = new Bot(apiToken);
   setLimiter(bot);

   registerCommands(bot);

   bot.start();
   console.log('bot started. Press Ctrl+c to stop.');
}
