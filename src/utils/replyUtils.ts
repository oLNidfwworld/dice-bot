export function createReplyOptions(messageId?: number) {
  if (!messageId) {
    return {};
  } 
  
  return {
    reply_parameters: {
      message_id: messageId,
    },
  };
}
