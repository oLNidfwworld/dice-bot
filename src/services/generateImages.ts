import { generateD20Image } from '../utils/images';

export async function generateImages() {
   const promises: Array<Promise<unknown>> = [];
   for (let i = 0; i <= 20; i++) {
      console.log('generating d' + i + ' image');
      promises.push(generateD20Image(i));
   }

   await Promise.all(promises);
   console.log('images generated');
}
