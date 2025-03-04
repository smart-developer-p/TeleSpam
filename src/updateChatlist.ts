import { TelegramClient } from "telegram";
import { CONFIG } from "./config";
import { saveTextToFile } from "./fileManage";
import { startSendMessage } from "./sendMessages";

export const updateChatList = async (client: TelegramClient) => {
    const dialogs = await client.getDialogs({});

    let groupIDs: string[] = [];

    for (const dialog of dialogs) {
        if (dialog.isGroup) {
            if ((dialog.entity as any)?.username) {
                groupIDs.push((dialog.entity as any)?.username);
            }
        }
    }

    await saveTextToFile(groupIDs.join('\n'));
    await startSendMessage(client);
};