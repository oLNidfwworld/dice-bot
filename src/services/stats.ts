import { prisma } from '../prisma-connect';

export async function setStats(stats: { uid: number; stat: number }) {
   const user = await prisma.user.findUnique({
      where: {
         id: stats.uid,
      },
   });
   if (!user) {
      await prisma.user.create({
         data: {
            id: stats.uid,
         },
      });
   }

   const record = await prisma.action.create({
      data: {
         result: stats.stat,
         userId: stats.uid,
      },
      include: {
         user: true,
      },
   });

   return record;
}
export const getStats = async (uid: number) =>
   await prisma.action.findMany({
      where: {
         userId: uid,
      },
      select: {
         result: true,
      },
   });
