import { CommandGroup } from '@grammyjs/commands';
import { Context } from 'grammy';

import { getStats } from '../../services/stats';
import createReplyOptions from '../../utils/reply-utils';

export const registerStatsCommand = (commandGroup: CommandGroup<Context>) =>
   commandGroup.command('stats', 'Ваша статистика', async (ctx) => {
      if (ctx.message?.from.id) {
         const stats = await getStats(ctx.message.from.id);
         const stat = {
            count: stats.length,
            avg: stats.reduce((acc, item) => acc + item.result, 0) / stats.length,
         };
         await ctx.reply(
            `Ваша статистика:\n\nВсего бросков: ${stat.count}\nСредний результат: ${stat.avg}
          `,
            { ...createReplyOptions(ctx.message?.message_id) },
         );
      } else {
         await ctx.reply('Увы вы инкогнида и статистика для вас не записывается', {
            ...createReplyOptions(ctx.message?.message_id),
         });
      }
   });
