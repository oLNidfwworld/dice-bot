"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateD20Image = generateD20Image;
const node_html_to_image_1 = __importDefault(require("node-html-to-image"));
async function generateD20Image(faceNumber) {
    const image = await (0, node_html_to_image_1.default)({
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
//# sourceMappingURL=images.js.map