import { Bot, InputFile } from "grammy";
import { generateImages } from "./images";
import rand from "./rand";

export default async function () {
  if (!process.env.API_BOT_TOKEN) {
    console.error("env.API_BOT_TOKEN is required");
    return;
  }
  // checkImagesInFolder()
  // await generateImages();

  const bot = new Bot(process.env.API_BOT_TOKEN);
  bot.command("dice", (ctx) => {
    let options = {};
    if ( ctx.message?.message_id ) {
        options = {
            reply_parameters: {
                message_id: ctx.message.message_id
            }
        }
    }
    ctx.replyWithPhoto(new InputFile(`./assets/img/dices/d${rand()}.png`), {
        ...options
    });
  });

  bot.start();
  console.log("bot started. Press Ctrl+c to stop.");
}
