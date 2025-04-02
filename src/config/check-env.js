"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEnvConfig = checkEnvConfig;
function checkEnvConfig() {
    if (!process.env.API_BOT_TOKEN) {
        console.error('env.API_BOT_TOKEN is required');
        throw new Error('env.API_BOT_TOKEN is required');
    }
    return process.env.API_BOT_TOKEN;
}
//# sourceMappingURL=check-env.js.map