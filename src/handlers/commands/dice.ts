import { CommandGroup } from '@grammyjs/commands';
import { Context } from 'grammy';
import emojis from '../../assets/data/emojis';
import { createReplyOptions } from '../../utils/reply-utils';
import rollDice from '../../services/roll-dice';

export const registerDiceCommand = (commandGroup: CommandGroup<Context>) =>
   commandGroup.command('dice', 'Крутите кубэк d20', async (ctx) => {
      const i = await rollDice(ctx);
      console.log(ctx.message?.from.id);
      try {
         await ctx.replyWithSticker(emojis[i], {
            ...createReplyOptions(ctx.message?.message_id),
         });
      } catch (e) {
         console.log('Возможно ' + i + 'd стикер проебан!');
         console.error(e);
      }
   });
