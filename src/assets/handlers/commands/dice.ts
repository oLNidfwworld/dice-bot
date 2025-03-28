import { CommandGroup } from "@grammyjs/commands";
import { Context } from "grammy"; 
import emojis from "../../data/emojis";
import { createReplyOptions } from "../../../utils/replyUtils"; 
import rollDice from "../../../services/rollDice";

export const registerDiceCommand = (commandGroup: CommandGroup<Context>) =>
  commandGroup.command("dice", "Крутите кубэк d20", async (ctx) => {
    const i = rollDice();
    console.log(ctx.message?.from.id);
    try {
      await ctx.replyWithSticker(emojis[i], {
        ...createReplyOptions(ctx.message?.message_id),
      });
    } catch (e) {
      console.log("Возможно " + i + "d стикер проебан!");
      console.error(e);
    }
  });
