import { Bot, InputFile } from "grammy";
import { createCanvas } from "canvas";
import fs from "fs/promises";
import nodeHtmlToImage from "node-html-to-image";

console.log(process.env.API_BOT_TOKEN);

async function main() {
    // checkImagesInFolder()
  if ( !process.env.API_BOT_TOKEN ) {
      console.error('env.API_BOT_TOKEN is required')
      return;
  }
//   await generateImages();
  
  const bot = new Bot(process.env.API_BOT_TOKEN); 
  bot.command("dice", (ctx) => {
    ctx.replyWithPhoto(new InputFile(`./assets/img/dices/d${getRndInteger()}.png`));
  }); 

  bot.start(); 
  console.log("bot started. Press Ctrl+c to stop.");
}

// async function checkImagesInFolder() {
//     const imagesDoesntExistInFolder : Array<number> = [];
//     try {
//         const files = await fs.readdir('./assets/img/dices/'); 
//         files.some( (val) => )
//     } catch ( exception ) {
//         console.error(exception);
//     } 
// }

function getRndInteger(min = 1, max = 21) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

async function generateImages() {
  const promises: Array<Promise<unknown>> = [];
  for (let i = 0; i <= 20; i++) {
    console.log("generating d" + i + " image");
    promises.push(generateD20Image(i));
  }

  await Promise.all(promises);
  console.log("images generated");
}

async function generateD20Image(faceNumber: number, options?: {}) {
  const image = await nodeHtmlToImage({
    output: `./assets/img/dices/d${faceNumber}.png`,
    html: `
                <html style=""><head></head><body style="
                    position: relative;
                    width: fit-content;
                    height: fit-content;
                ">
                <div style="
                    position: absolute;
                    left: 0;
                    inset: 0;
                    margin: auto;
                    width: fit-content;
                    height: fit-content;
                    font-size: 30px;
                    font-weight: 900;
                    color: white;
                    font-family: SANS-SERIF;
                ">${faceNumber}</div>
                <img style="" src="https://rolladie.net/images/dice/d20.png"></body></html>
            `,
  });
  return image;
}

main();
