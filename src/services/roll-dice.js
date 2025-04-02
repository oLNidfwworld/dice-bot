"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const random_1 = __importDefault(require("../utils/random"));
const stats_1 = require("./stats");
async function default_1(ctx) {
    var _a;
    const randInt = (0, random_1.default)(1, 21);
    if ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.from.id) {
        await (0, stats_1.setStats)({ uid: ctx.message.from.id, stat: randInt });
    }
    return randInt;
}
//# sourceMappingURL=roll-dice.js.map