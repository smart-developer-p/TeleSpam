import { TelegramClient } from "telegram";
import { updateChatList } from "./updateChatlist";

export const eventHandler = (client: TelegramClient) => async (event) => {
    try {
        if (event?.message?.className === "MessageService") {
            if (!event?.message?.fromId?.userId?.value) return;
            try {
                let isMe: boolean = (event?.message?.fromId?.userId?.value === ((await client.getMe()).id as any).value);
                if (isMe) await updateChatList(client);
            } catch (error) {
                console.log(error);
            }
        } else {

        }
    } catch (error) {
        console.log(error);
    }
};