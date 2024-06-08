import { Chat as TChat } from "../api/chat/Chat";

export const CHAT_TITLE_FIELD = "user1";

export const ChatTitle = (record: TChat): string => {
  return record.user1?.toString() || String(record.id);
};
