import { Bot } from "grammy";  
import { registerCommands } from "./assets/handlers/commands";
import { checkEnvConfig } from "./config/checkEnv";
import { getStats } from "./services/stats";

export default async function () {
  getStats()
  const apiToken = checkEnvConfig();

  const bot = new Bot(apiToken); 
    
  registerCommands(bot);
   
  bot.start();
  console.log("bot started. Press Ctrl+c to stop.");
}
