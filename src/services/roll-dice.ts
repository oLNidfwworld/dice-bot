import { CommandContext, Context } from 'grammy';
import random from '../utils/random';
import { setStats } from './stats';

export default async function (ctx: CommandContext<Context>) {
   const randInt = random(1, 21);

   if (ctx.message?.from.id) {
      await setStats({ uid: ctx.message.from.id, stat: randInt });
   }

   return randInt;
}
