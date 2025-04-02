"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImages = generateImages;
const images_1 = require("../utils/images");
async function generateImages() {
    const promises = [];
    for (let i = 0; i <= 20; i++) {
        console.log('generating d' + i + ' image');
        promises.push((0, images_1.generateD20Image)(i));
    }
    await Promise.all(promises);
    console.log('images generated');
}
//# sourceMappingURL=generate-images.js.map