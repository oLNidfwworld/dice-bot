"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReplyOptions = createReplyOptions;
function createReplyOptions(messageId) {
    if (!messageId) {
        return {};
    }
    return {
        reply_parameters: {
            message_id: messageId,
        },
    };
}
//# sourceMappingURL=reply-utils.js.map