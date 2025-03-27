import nodeHtmlToImage from "node-html-to-image";

export async function generateImages() {
  const promises: Array<Promise<unknown>> = [];
  for (let i = 0; i <= 20; i++) {
    console.log("generating d" + i + " image");
    promises.push(generateD20Image(i));
  }

  await Promise.all(promises);
  console.log("images generated");
}

export async function generateD20Image(faceNumber: number, options?: {}) {
  const image = await nodeHtmlToImage({
    output: `./assets/img/dices/d${faceNumber}.png`,
    html: `
        <html style="">
            <head></head>
            <body style="
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
                <img style="" src="https://rolladie.net/images/dice/d20.png">
            </body>
        </html>
            `,
  });
  return image;
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
