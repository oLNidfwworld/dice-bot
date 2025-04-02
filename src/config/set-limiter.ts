import { limit } from '@grammyjs/ratelimiter';
import { Bot } from 'grammy';
import createReplyOptions from '../utils/reply-utils';

export default (bot: Bot) =>
   bot.use(
      limit({
         timeFrame: 3500,
         limit: 2,
         onLimitExceeded: async (ctx) => {
            await ctx.reply('Хватит спамить уебище!', {
               ...createReplyOptions(ctx.message?.message_id),
            });
         },
         keyGenerator: (ctx) => {
            return ctx.from?.id.toString();
         },
      }),
   );
