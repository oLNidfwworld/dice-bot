import { CommandGroup } from '@grammyjs/commands';
import { Context } from 'grammy';
import { createReplyOptions } from '../../utils/reply-utils';

export const registerCommandsCommand = (commandGroup: CommandGroup<Context>) =>
   commandGroup.command('commands', 'Команды бота', async (ctx) => {
      try {
         await ctx.reply(
            ` 
            Команды бота:\nпока только...\n\n/dice - Крутите кубэк d20\n/commands - Команды бота\n/stats - Ваша статистика
          `,
            { ...createReplyOptions(ctx.message?.message_id) },
         );
      } catch (e) {
         console.error(e);
      }
   });
